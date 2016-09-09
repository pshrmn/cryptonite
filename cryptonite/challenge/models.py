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


class Challenge(models.Model):
    """
    A Challenge presents the user with an encrypted message which
    the user is expected to decrypt.
    """
    name = models.CharField(max_length=200)
    encrypted = models.CharField(max_length=1000)
    decrypted = models.CharField(max_length=1000)
    description = models.CharField(max_length=10000, default='')
    path = models.ForeignKey(Path,
                             null=True,
                             blank=True,
                             on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def as_dict(self):
        challenge = {
            'pk': self.pk,
            'name': self.name,
            'encrypted': self.encrypted,
            'description': self.description
        }
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

    def __str__(self):
        return '{} - {}'.format(self.challenge, self.user)

    def as_dict(self):
        return self.challenge.decrypted_dict()
