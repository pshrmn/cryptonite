from django.db import models
from django.conf import settings


class Path(models.Model):
    """
    A Path consists of a number of Challenges that can be
    completed by a user.
    """
    name = models.CharField(max_length=200)

    def as_dict(self):
        return {
            'pk': self.pk,
            'name': self.name,
            'challenges': [c.as_dict() for c in self.challenge_set.all()]
        }


SHIFT = 'S'
VIGENERE = 'V'
CIPHER_CHOICES = (
    (SHIFT, 'Shift'),
    (VIGENERE, 'Vigenere')
)


class Challenge(models.Model):
    """
    A Challenge presents the user with an encrypted message which
    the user is expected to decrypt.
    """
    name = models.CharField(max_length=200)
    encrypted = models.CharField(max_length=1000)
    decrypted = models.CharField(max_length=1000)
    cipher = models.CharField(max_length=1,
                              choices=CIPHER_CHOICES,
                              default=SHIFT)
    # if known_cipher is True, the type of cipher used to encrypt
    # the message will be shown to the User
    known_cipher = models.BooleanField(default=True)
    path = models.ForeignKey(Path,
                             null=True,
                             blank=True,
                             on_delete=models.CASCADE)

    def as_dict(self):
        challenge = {
            'pk': self.pk,
            'name': self.name,
            'encrypted': self.encrypted
        }
        if self.known_cipher:
            challenge['cipher'] = self.cipher
        return challenge

    def decrypted_dict(self):
        challenge = self.as_dict()
        challenge['decrypted'] = self.decrypted
        return challenge


class CompletedChallenge(models.Model):
    """
    A CompletedChallenge is created when a User completes
    a Challenge
    """
    challenge = models.ForeignKey(Challenge,
                                  on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)

    def as_dict(self):
        return self.challenge.decrypted_dict()
