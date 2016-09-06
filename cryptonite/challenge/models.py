from django.db import models
from django.conf import settings


class Path(models.Model):
    """
    A Path consists of a number of Challenges that can be
    completed by a user.
    """
    name = models.CharField(max_length=200)


SHIFT = "S"
VIGENERE = "V"
CIPHER_CHOICES = (
    (SHIFT, "Shift"),
    (VIGENERE, "Vigenere")
)


class Challenge(models.Model):
    """
    A Challenge presents the user with an encoded message which
    the user is expected to decode.
    """
    name = models.CharField(max_length=200)
    encoded = models.CharField(max_length=1000)
    decoded = models.CharField(max_length=1000)
    cipher = models.CharField(max_length=1,
                              choices=CIPHER_CHOICES,
                              default=SHIFT)
    # if known_cipher is True, the type of cipher used to encrypt
    # the message will be shown to the User
    known_cipher = models.BooleanField(default=True)
    path = models.ForeignKey(Path, null=True)


class UserChallenge(models.Model):
    """
    A UserChallenge tracks whether or not a Challenge has been
    completed by a User.
    """
    challenge = models.ForeignKey(Challenge)
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    completed = models.BooleanField(default=False)
