import json
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from django.contrib.auth import (get_user_model, authenticate,
                                 login as auth_login, logout as auth_logout)
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

User = get_user_model()


@require_http_methods(['POST'])
def signup(request):
    """
    the signup view takes a JSON request and uses the data to create
    a new user. If a new user is successfully created, the user will
    automatically be logged in.
    """
    if request.user.is_authenticated():
        return JsonResponse({
            'success': False,
            'errors': ['Cannot create an account when you are already logged in']
        })
    data = json.loads(request.body.decode())
    form = UserCreationForm(data)
    if form.is_valid():
        form.save()
        user = authenticate(username=data['username'], password=data['password1'])
        auth_login(request, user)
        return JsonResponse({
            'user': {
                'username': user.username,
                'pk': user.pk
            },
            'success': True,
            'errors': []
        })
    else:
        return JsonResponse({
            'success': False,
            'errors': form.errors
        })


@require_http_methods(['POST'])
def login(request):
    data = json.loads(request.body.decode())
    form = AuthenticationForm(request, data=data)
    if form.is_valid():
        user = form.get_user()
        auth_login(request, user)
        return JsonResponse({
            'user': {
                'username': user.username,
                'pk': user.pk
            },
            'success': True,
            'errors': []
        })
    else:
        return JsonResponse({
            'success': False,
            'errors': form.errors
        })


@login_required
def logout(request):
    auth_logout(request)
    return JsonResponse({
        'success': True
    })
