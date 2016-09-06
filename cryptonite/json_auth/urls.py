from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^signup$', views.signup, name='account-signup'),
    url(r'^login$', views.login, name='account-login'),
    url(r'^logout$', views.logout, name='account-logout'),
    url(r'^change_password$', views.change_password, name='account-change-password')
]
