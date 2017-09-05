from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import RedirectView

from catch_all.views import base_view, unknown_api

from graphene_django.views import GraphQLView

urlpatterns = [
    url(r'^challenges/', include('challenge.urls.web')),
    url(r'^challenges$', RedirectView.as_view(
                            pattern_name='challenge-web-all',
                            permanent=True)
                         )
]

urlpatterns += [
    url(r'^graphql', GraphQLView.as_view(graphiql=True)),
]

urlpatterns += [
    url(
        r'^api/',
        include(
            [
                url(r'^challenge/', include('challenge.urls.api')),
                url(r'^(?:.*)/?$', unknown_api, name='unknown_api')
            ]
        )
    )
]

urlpatterns += [
    url(r'^admin/', admin.site.urls),
    # because the catch all prevents APPEND_SLASH from redirecting
    # /admin to /admin/, the redirect needs to be done manually
    url(r'^admin$', RedirectView.as_view(
                        pattern_name='admin:index',
                        permanent=True)
                    )
]

"""
all other pages will be rendered client side using React
"""
urlpatterns += [
    url(r'^$', base_view, name='home'),
    url(r'^(?:.*)/?$', base_view, name='base'),
]
