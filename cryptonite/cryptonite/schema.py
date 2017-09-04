import graphene
from challenge.schema import Query as ChallengeQuery
from user_auth.schema import Mutation as UserMutation

class Query(ChallengeQuery, graphene.ObjectType):
    pass

class Mutation(UserMutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)
