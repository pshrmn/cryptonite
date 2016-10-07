from django.test import TestCase, override_settings

from challenge.models import Challenge, CompletedChallenge
from cryptographer.models import Cryptographer


@override_settings(FIXTURE_DIRS=['challenge/tests/fixtures'])
class ChallengeTestCase(TestCase):

    fixtures = ['challenges.json']

    def setUp(self):
        self.easy = Challenge.objects.get(pk=1)

    def test_create(self):
        self.assertIsInstance(self.easy, Challenge)

    def test_as_dict(self):
        easy_dict = self.easy.as_dict()
        values = [
            ('pk', int),
            ('name', str),
            ('problem', str),
            ('description', str),
            ('cipher', str),
            ('points', int),
            ('points_required', int)
        ]
        for value, value_type in values:
            self.assertIn(value, easy_dict)
            self.assertIsInstance(easy_dict[value], value_type)
        # as_dict does not include the solution message
        self.assertNotIn('solution', easy_dict)

    def test_decrypted_dict(self):
        easy_dict = self.easy.decrypted_dict()
        # decrypted_dict returns the same dict as as_dict, but with the addition
        # of the solution message
        self.assertIn('solution', easy_dict)
        self.assertIsInstance(easy_dict['solution'], str)


@override_settings(FIXTURE_DIRS=['challenge/tests/fixtures'])
class CompletedChallengeTestCase(TestCase):

    fixtures = [
        'challenges.json',
        'users.json',
        'cryptographers.json',
        'completed_challenges.json'
    ]

    def setUp(self):
        self.challenge = Challenge.objects.get(pk=1)
        self.crypto = Cryptographer.objects.get(pk=1)

    def test_create(self):
        comp = CompletedChallenge(
            challenge=self.challenge,
            cryptographer=self.crypto
        )
        self.assertIsInstance(comp, CompletedChallenge)
