from django.shortcuts import render, redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
import json

from challenge.models import Challenge
from helpers.context import user_state


def all_challenges(request):
    challenges = []
    for challenge in Challenge.objects.all():
        c_dict = challenge.as_dict()
        c_dict['completed'] = challenge.users.filter(pk=request.user.pk).exists()
        challenges.append(c_dict)
    initial_state = {
        'user': user_state(request.user),
        'challenges': challenges
    }
    return render(request,
                  template_name='base.html',
                  context={
                    'initial_state': json.dumps(initial_state)
                  })


def challenge(request, pk):
    if not request.user.is_authenticated:
        return redirect(to='challenge-web-all')
    try:
        challenge = Challenge.objects.get(pk=pk)
    except Challenge.DoesNotExist:
        return redirect(to='challenge-web-all')
    challenge_dict = challenge.as_dict()
    challenge_dict['completed'] = challenge.users.filter(pk=request.user.pk).exists()
    initial_state = {
        'user': user_state(request.user),
        'challenges': [challenge_dict]
    }
    return render(request,
                  template_name='base.html',
                  context={
                    'initial_state': json.dumps(initial_state)
                  })
