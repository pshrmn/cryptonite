import graphene
from graphene_django.types import DjangoObjectType
from django.contrib.auth import (get_user_model, authenticate,
                                 login as auth_login, logout as auth_logout,
                                 update_session_auth_hash)
from django.contrib.auth.forms import (UserCreationForm, AuthenticationForm,
                                       PasswordChangeForm)

from cryptographer.models import Cryptographer
from cryptographer.schema import CryptographerType
from helpers.schema import FormError, list_errors

class LoginUser(graphene.Mutation):
    class Arguments:
        username = graphene.String()
        password = graphene.String()

    user = graphene.Field(CryptographerType)
    success = graphene.Boolean()
    errors = graphene.List(FormError)

    def mutate(self, info, username, password):
        if info.context.user.is_authenticated:
            return LoginUser(
                user=None,
                success=False,
                errors=list_errors({ "__all__": ['Cannot login when already logged in']})
            )
        form = AuthenticationForm(info.context, { "username": username, "password": password })
        if form.is_valid():
            success = True
            user = form.get_user()
            auth_login(info.context, user)
            return LoginUser(user=user.cryptographer, success=True, errors=[])
        else:
            return LoginUser(user=None, success=False, errors=list_errors(form.errors))

class SignupUser(graphene.Mutation):
    class Arguments:
        username = graphene.String()
        password1 = graphene.String()
        password2 = graphene.String()

    user = graphene.Field(CryptographerType)
    success = graphene.Boolean()
    errors = graphene.List(FormError)

    def mutate(self, info, username, password1, password2):
        if info.context.user.is_authenticated:
            return SignupUser(
                user=None,
                success=False,
                errors=list_errors({ "__all__": ['Cannot signup when already logged in']})
            )
        form = UserCreationForm({
            "username": username,
            "password1": password1,
            "password2": password2
        })
        if form.is_valid():
            form.save()
            user = authenticate(username=username, password=password1)
            # create a Cryptographer and link it to the user
            c = Cryptographer(user=user)
            c.save()
            auth_login(info.context, user)

            return SignupUser(user=c, success=True, errors=[])
        else:
            return SignupUser(user=None, success=False, errors=list_errors(form.errors))

class LogoutUser(graphene.Mutation):
    success = graphene.Boolean()
    user = graphene.Field(CryptographerType)

    def mutate(self, info):
        auth_logout(info.context)
        return LogoutUser(success=True, user=None)

class ChangePassword(graphene.Mutation):
    class Arguments:
        old_password = graphene.String()
        new_password1 = graphene.String()
        new_password2 = graphene.String()

    success = graphene.Boolean()
    errors = graphene.List(FormError)

    def mutate(self, info, old_password, new_password1, new_password2):
        form = PasswordChangeForm(info.context.user, data={
            "old_password": old_password,
            "new_password1": new_password1,
            "new_password2": new_password2
        })
        if form.is_valid():
            form.save()
            update_session_auth_hash(info.context, form.user)
            return ChangePassword(success=True, errors=[])
        else:
            return ChangePassword(success=False, errors=list_errors(form.errors))

class Mutation(object):
    login_user = LoginUser.Field()
    signup_user = SignupUser.Field()
    logout_user = LogoutUser.Field()
    change_password = ChangePassword.Field()
