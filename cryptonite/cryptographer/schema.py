import graphene
from graphene_django.types import DjangoObjectType
from django.contrib.auth import get_user_model

from .models import Cryptographer

User = get_user_model()

class UserType(DjangoObjectType):
    class Meta:
        model = User

class CryptographerType(DjangoObjectType):
    class Meta:
        model = Cryptographer
        exclude_fields = ('user',)

    username = graphene.String()
    authenticated = graphene.Boolean()

    def resolve_username(self, info):
        return self.user.username

    def resolve_authenticated(self, info):
        return self.user.is_authenticated

class Query(object):
    user = graphene.Field(CryptographerType)

    def resolve_user(self, info):
        user = info.context.user
        if not user.is_authenticated:
            return None
        return user.cryptographer
