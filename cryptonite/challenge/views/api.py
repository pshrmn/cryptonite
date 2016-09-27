import json
from django.http import JsonResponse

from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods

from challenge.models import Challenge, CompletedChallenge


@require_http_methods(['GET'])
def all_challenges(request):
    if not request.user.is_authenticated():
        return JsonResponse({
            'success': False,
            'errors': {
                '__all__': ['You must be logged in to view challenges']
            },
            'challenges': []
        })
    total_points = request.user.cryptographer.points
    challenges = []
    for challenge in Challenge.objects.all():
        c_dict = challenge.as_dict()
        c_dict['completed'] = challenge.users.filter(pk=request.user.cryptographer.pk).exists()
        c_dict['can_do'] = total_points >= c_dict['points_required']
        challenges.append(c_dict)
    return JsonResponse({
        'success': True,
        'errors': {},
        'challenges': challenges
    })


@require_http_methods(['GET'])
def challenge(request, pk):
    if not request.user.is_authenticated():
        return JsonResponse({
            'success': False,
            'errors': {
                '__all__': ['You must be logged in to view challenges']
            },
        })
    try:
        challenge = Challenge.objects.get(pk=pk)
    except Challenge.DoesNotExist:
        return JsonResponse({
            'success': False,
            'errors': {
                '__all__': ['The Challenge cannot be found']
            }
        })
    challenge_dict = challenge.as_dict()
    total_points = request.user.cryptographer.points
    if challenge_dict.get('points_required') > total_points:
        points_message = ('You do not have enough points to attempt this challenge. '
                          'Complete easier challenges to get more points.')
        return JsonResponse({
            'success': False,
            'errors': {
                '__all__': [points_message]
            }
        })
    challenge_dict['completed'] = challenge.users.filter(pk=request.user.cryptographer.pk).exists()
    return JsonResponse({
        'success': True,
        'errors': {},
        'challenge': challenge_dict
    })


@require_http_methods(['POST'])
@login_required
def check_challenge(request, pk):
    data = json.loads(request.body.decode())
    msg = data.get('message')
    try:
        challenge = Challenge.objects.get(pk=pk)
    except Challenge.DoesNotExist:
        return JsonResponse({
            'success': False,
            'errors': {
                '__all__': ['The Challenge cannot be found']
            }
        })
    # a user can't check a challenge that they don't have access to
    total_points = request.user.cryptographer.points
    if challenge.points_required > total_points:
        return JsonResponse({
            'success': False,
            'errors': [
                ('You do not have enough points to attempt this challenge. '
                 'Complete easier challenges to get more points.')
            ]
        })
    if msg.upper() == challenge.solution:
        """
        when the user has submitted the correct solution, add a row to the
        CopmletedChallenge table and update the user (cryptographer) point
        total
        """
        crypto = request.user.cryptographer
        _, created = CompletedChallenge.objects.get_or_create(
            cryptographer=crypto,
            challenge=challenge
        )
        if created:
            crypto.points += challenge.points
            crypto.save()
        challenge_dict = challenge.decrypted_dict()
        challenge_dict['completed'] = True
        challenge_dict['can_do'] = True
        return JsonResponse({
            'success': True,
            'errors': {},
            'challenge': challenge_dict,
            'new_points': crypto.points
        })
    else:
        return JsonResponse({
            'success': False,
            'errors': {
                '__all__': ['The submitted message is incorrect']
            }
        })
