def user_state(user):
    if user.is_authenticated:
        return {
            'authenticated': True,
            'username': user.username,
            'pk': user.pk,
            'points': user.cryptographer.points
        }
    else:
        return {
            'authenticated': False
        }
