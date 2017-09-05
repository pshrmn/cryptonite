import graphene

class FormError(graphene.ObjectType):
    key = graphene.String()
    value = graphene.List(graphene.String)

def list_errors(errors):
    return [FormError(k,v) for k,v in errors.items()]
