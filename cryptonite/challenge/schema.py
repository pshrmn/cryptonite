import graphene
from graphene_django.types import DjangoObjectType

from .models import Challenge

class ChallengeType(DjangoObjectType):
    class Meta:
        model = Challenge
        exclude_fields = ('users',)

    can_do = graphene.Boolean()
    completed = graphene.Boolean()

    def resolve_can_do(self, args, context, info):
        total_points = context.user.cryptographer.points
        return self.can_do(total_points)

    def resolve_completed(self, args, context, info):
        return self.completed_by(context.user)

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
