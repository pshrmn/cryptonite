from django.db import models
from django.contrib.auth.models import User


class Cryptographer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.PositiveIntegerField(default=0)

    def __str__(self):
        return str(self.user)
