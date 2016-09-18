import json
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from .models import Challenge


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
    challenges = []
    for challenge in Challenge.objects.all():
        c_dict = challenge.as_dict()
        c_dict['completed'] = challenge.users.filter(pk=request.user.pk).exists()
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
    challenge_dict['completed'] = challenge.users.filter(pk=request.user.pk).exists()
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
    if msg.upper() == challenge.decrypted:
        challenge.users.add(request.user)
        return JsonResponse({
            'success': True,
            'errors': {}
        })
    else:
        return JsonResponse({
            'success': False,
            'errors': {
                '__all__': ['The submitted message is incorrect']
            }
        })
