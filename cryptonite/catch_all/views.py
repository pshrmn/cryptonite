from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
import json

@ensure_csrf_cookie
def base_view(request):
    return render(request, template_name='base.html')
