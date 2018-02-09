from django.db import models

from cryptographer.models import Cryptographer


class Challenge(models.Model):
    """
    A Challenge presents the user with a problem message
    that the user is expected to solve. When the problem
    is solved by the user, they are awarded some amount
    of points. Some Challenges require a user to have
    accumulated a certain number of points to do them
    (i.e., users are required to complete easier Challenges
    before attempting harder ones).
    """
    SHIFT = 'SH'
    VIGENERE = 'VI'
    UNKNOWN = 'UN'
    CIPHER_CHOICES = (
        (SHIFT, 'Shift'),
        (VIGENERE, 'Vigenère'),
        (UNKNOWN, 'Unknown')
    )


    name = models.CharField(max_length=200)
    problem = models.CharField(max_length=1000)
    solution = models.CharField(max_length=1000)
    description = models.CharField(max_length=10000, default='')
    cipher = models.CharField(
        max_length=2,
        choices=CIPHER_CHOICES,
        default=UNKNOWN
    )
    points = models.PositiveIntegerField(default=50)
    points_required = models.PositiveIntegerField(default=0)
    users = models.ManyToManyField(Cryptographer,
                                   blank=True,
                                   through='CompletedChallenge')

    def __str__(self):
        return '%d - %s' % (self.pk, self.name)

    def as_dict(self):
        challenge = {
            'pk': self.pk,
            'name': self.name,
            'problem': self.problem,
            'description': self.description,
            'cipher': self.get_cipher_display(),
            'points': self.points,
            'points_required': self.points_required
        }
        return challenge

    def decrypted_dict(self):
        challenge = self.as_dict()
        challenge['solution'] = self.solution
        return challenge

    def can_do(self, user_points):
        return user_points >= self.points_required

    def completed_by(self, user):
        pk = user.cryptographer.pk
        return self.users.filter(pk=pk).exists()


class CompletedChallenge(models.Model):
    challenge = models.ForeignKey(Challenge, on_delete=models.CASCADE)
    cryptographer = models.ForeignKey(Cryptographer, on_delete=models.CASCADE)

    def __str__(self):
        return '%d - %d' % (self.cryptographer.pk, self.challenge.pk)
