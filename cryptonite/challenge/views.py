import json
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods

from .models import Path, Challenge, CompletedChallenge


@require_http_methods(['GET'])
@login_required
def path(request, pk):
    try:
        path = Path.objects.get(pk=pk)
    except Path.DoesNotExist:
        return JsonResponse({
            'success': False,
            'errors': {
                '__all__': ['The Path cannot be found']
            }
        })
    return JsonResponse({
        'success': True,
        'errors': {},
        'path': path.as_dict()
    })


@require_http_methods(['GET'])
@login_required
def challenge(request, pk):
    try:
        challenge = Challenge.objects.get(pk=pk)
    except Challenge.DoesNotExist:
        return JsonResponse({
            'success': False,
            'errors': {
                '__all__': ['The Challenge cannot be found']
            }
        })
    return JsonResponse({
        'success': True,
        'errors': {},
        'challenge': challenge.as_dict()
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
        # create a new CompletedChallenge if the user has not already completed
        # this challenge
        CompletedChallenge.objects.get_or_create(challenge=challenge, user=request.user)
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
