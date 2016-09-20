from django.conf.urls import url, include

from challenge.views import web as views

urlpatterns = [
    url(r'^$', views.all_challenges, name='challenge-web-all'),
    url(r'^(?P<pk>\d+)$', views.challenge, name='challenge-web-challenge')
]
