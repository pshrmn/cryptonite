from django.conf.urls import url, include
from django.contrib import admin

from catch_all.views import base_view, unknown_api

urlpatterns = [
    url(
        r'^api/',
        include(
            [
                url(r'^auth/', include('json_auth.urls')),
                url(r'^(?:.*)/?$', unknown_api, name='unknown_api')
            ]
        )
    )
]

urlpatterns += [
    url(r'^admin/', admin.site.urls),
]

"""
all other pages will be rendered client side using React
"""
urlpatterns += [
    url(r'^$', base_view, name='home'),
    url(r'^(?:.*)/?$', base_view, name='base'),
]
