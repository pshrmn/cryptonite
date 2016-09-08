from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import RedirectView

from catch_all.views import base_view, unknown_api

urlpatterns = [
    url(
        r'^api/',
        include(
            [
                url(r'^auth/', include('json_auth.urls')),
                url(r'^challenge/', include('challenge.urls')),
                url(r'^(?:.*)/?$', unknown_api, name='unknown_api')
            ]
        )
    )
]

urlpatterns += [
    url(r'^admin/', admin.site.urls),
    # because the catch all prevents APPEND_SLASHES from redirecting
    # /admin to /admin/, the redirect needs to be done manually
    url(r'^admin$', RedirectView.as_view(pattern_name='admin:index', permanent=True))
]

"""
all other pages will be rendered client side using React
"""
urlpatterns += [
    url(r'^$', base_view, name='home'),
    url(r'^(?:.*)/?$', base_view, name='base'),
]
