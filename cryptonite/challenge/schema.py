import graphene
from graphene_django.types import DjangoObjectType

from .models import Challenge

class ChallengeType(DjangoObjectType):
    class Meta:
        model = Challenge

class Query(graphene.AbstractType):
    all_challenges = graphene.List(ChallengeType)
    challenge = graphene.Field(ChallengeType,
                               pk=graphene.Int())

    def resolve_all_challenges(self, args, context, info):
        if not context.user.is_authenticated():
            return []
        return Challenge.objects.all()

    def resolve_challenge(self, args, context, info):
        if not context.user.is_authenticated():
            return None
        pk = args.get('pk')
        if pk is None:
            return None
        return Challenge.objects.get(pk=pk)
