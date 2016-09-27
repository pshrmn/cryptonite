from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
import json

from helpers.context import user_state


@ensure_csrf_cookie
def base_view(request):
    initial_state = {
        'user': user_state(request.user),
        'challenges': []
    }
    return render(request,
                  template_name='base.html',
                  context={
                      'initial_state': json.dumps(initial_state)
                  })


def unknown_api(request):
    return JsonResponse({
        'success': False,
        'errors': ['Invalid API call.']
    })
