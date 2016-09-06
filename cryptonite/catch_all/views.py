from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse


@ensure_csrf_cookie
def base_view(request):
    return render(request, template_name='base.html')


def unknown_api(request):
    return JsonResponse({
        'success': False,
        'errors': ['Invalid API call.']
    })
