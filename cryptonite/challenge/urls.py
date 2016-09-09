from django.conf.urls import url, include

from . import views

urlpatterns = [
    url(r'^all$', views.all_challenges, name='challenge-all'),
    url(r'^(?P<pk>\d+)/', include([
        url(r'^$', views.challenge, name='challenge-challenge'),
        url(r'^check$', views.check_challenge, name='challenge-check')
    ]))
]
