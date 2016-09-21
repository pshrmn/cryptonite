from django.contrib import admin

from .models import Challenge, CompletedChallenge

admin.site.register(Challenge)
admin.site.register(CompletedChallenge)
