def user_state(user):
    if user.is_authenticated:
        return {
            'authenticated': True,
            'username': user.username,
            'pk': user.pk
        }
    else:
        return {
            'authenticated': False
        }
