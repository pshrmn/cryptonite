from django.db import models
from django.conf import settings


class Challenge(models.Model):
    """
    A Challenge presents the user with an encrypted message which
    the user is expected to decrypt.
    """
    name = models.CharField(max_length=200)
    problem = models.CharField(max_length=1000)
    solution = models.CharField(max_length=1000)
    description = models.CharField(max_length=10000, default='')
    users = models.ManyToManyField(settings.AUTH_USER_MODEL,
                                   blank=True)

    def __str__(self):
        return self.name

    def as_dict(self):
        challenge = {
            'pk': self.pk,
            'name': self.name,
            'problem': self.problem,
            'description': self.description
        }
        return challenge

    def decrypted_dict(self):
        challenge = self.as_dict()
        challenge['solution'] = self.solution
        return challenge
