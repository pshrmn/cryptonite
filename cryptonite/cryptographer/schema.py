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
