import graphene
from challenge.schema import Query as ChallengeQuery, Mutation as ChallengeMutation
from cryptographer.schema import Query as CryptographerQuery
from user_auth.schema import Mutation as AuthMutation

class Query(ChallengeQuery, CryptographerQuery, graphene.ObjectType):
    pass

class Mutation(ChallengeMutation, AuthMutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
