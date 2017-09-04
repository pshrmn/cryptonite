import graphene
from challenge.schema import Query as ChallengeQuery

class Query(ChallengeQuery, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
