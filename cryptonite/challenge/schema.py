import graphene
from graphene_django.types import DjangoObjectType

from .models import Challenge, CompletedChallenge

from cryptographer.schema import CryptographerType
from helpers.schema import FormError, list_errors

class ChallengeType(DjangoObjectType):
    class Meta:
        model = Challenge
        exclude_fields = ('users',)

    can_do = graphene.Boolean()
    completed = graphene.Boolean()
    cipher = graphene.String()

    def resolve_can_do(self, info):
        total_points = info.context.user.cryptographer.points
        return self.can_do(total_points)

    def resolve_completed(self, info):
        return self.completed_by(info.context.user)

    def resolve_cipher(self, info):
        print("returning", self.get_cipher_display())
        return self.get_cipher_display()

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

class CheckChallenge(graphene.Mutation):
    class Arguments:
        message = graphene.String()
        pk = graphene.Int()

    user = graphene.Field(CryptographerType)
    success = graphene.Boolean()
    errors = graphene.List(FormError)

    def mutate(self, info, pk, message):
        user = info.context.user
        if not user.is_authenticated():
            return CheckChallenge(
                userNone,
                success=False,
                errors=list_errors({
                    "__all__": ["You must be logged into check a challenge."]
                })
            )
        challenge = Challenge.objects.get(pk=pk)
        cryptographer = user.cryptographer
        if not challenge.can_do(cryptographer.points):
            return CheckChallenge(
                user=cryptographer,
                success=False,
                errors=list_errors({
                    "__all__": [('You do not have enough points to attempt this challenge. '
                                'Complete easier challenges to get more points.')]
                })
            )
        if message.upper() == challenge.solution:
            """
            when the user has submitted the correct solution, add a row to the
            CopmletedChallenge table and update the user (cryptographer) point
            total
            """
            _, created = CompletedChallenge.objects.get_or_create(
                cryptographer=cryptographer,
                challenge=challenge
            )
            if created:
                cryptographer.points += challenge.points
                cryptographer.save()
            
            return CheckChallenge(user=cryptographer, success=True, errors=[])
        else:
            return CheckChallenge(
                user=cryptographer,
                success=False,
                errors=list_errors({"message": ['The provided message was not correct.']})
            )        

class Mutation(object):
    check_challenge = CheckChallenge.Field()
