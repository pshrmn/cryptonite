from django.conf.urls import url, include

from challenge.views import api as api_views

urlpatterns = [
    url(r'^all$', api_views.all_challenges, name='challenge-api-all'),
    url(r'^(?P<pk>\d+)/', include([
        url(r'^$', api_views.challenge, name='challenge-api-challenge'),
        url(r'^check$', api_views.check_challenge, name='challenge-api-check')
    ]))
]
