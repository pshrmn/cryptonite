from django.contrib import admin

from .models import Challenge, Path, CompletedChallenge

admin.site.register(Path)
admin.site.register(Challenge)
admin.site.register(CompletedChallenge)
