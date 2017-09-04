import graphene
from graphene_django.types import DjangoObjectType

from .models import Challenge

class ChallengeType(DjangoObjectType):
    class Meta:
        model = Challenge
        exclude_fields = ('users',)

    can_do = graphene.Boolean()
    completed = graphene.Boolean()

    def resolve_can_do(self, info):
        total_points = info.context.user.cryptographer.points
        return self.can_do(total_points)

    def resolve_completed(self, info):
        return self.completed_by(info.context.user)

class Query(object):
    all_challenges = graphene.List(ChallengeType)
    challenge = graphene.Field(ChallengeType,
                               pk=graphene.Int())

    def resolve_all_challenges(self, info):
        if not info.context.user.is_authenticated():
            return []
        return Challenge.objects.all()

    def resolve_challenge(self, info, pk):
        if not info.context.user.is_authenticated():
            return None
        return Challenge.objects.get(pk=pk)
