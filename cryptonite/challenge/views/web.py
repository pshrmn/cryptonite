from django.shortcuts import render, redirect
import json

from challenge.models import Challenge
from helpers.context import user_state


def all_challenges(request):
    if not request.user.is_authenticated:
        return redirect(to='/login?next=%s' % request.path)
    challenges = []
    total_points = request.user.cryptographer.points
    for challenge in Challenge.objects.all():
        c_dict = challenge.as_dict()
        c_dict['completed'] = challenge.users.filter(pk=request.user.cryptographer.pk).exists()
        c_dict['can_do'] = total_points >= c_dict['points_required']
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
        return redirect(to='/login?next=%s' % request.path)
    try:
        challenge = Challenge.objects.get(pk=pk)
    except Challenge.DoesNotExist:
        return redirect(to='challenge-web-all')

    challenge_dict = challenge.as_dict()
    total_points = request.user.cryptographer.points
    if challenge_dict.get('points_required') > total_points:
        return redirect(to='challenge-web-all')
    else:
        challenge_dict['can_do'] = True

    challenge_dict['completed'] = challenge.users.filter(pk=request.user.cryptographer.pk).exists()
    initial_state = {
        'user': user_state(request.user),
        'challenges': [challenge_dict]
    }
    return render(request,
                  template_name='base.html',
                  context={
                    'initial_state': json.dumps(initial_state)
                  })
