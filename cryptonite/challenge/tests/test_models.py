from django.test import TestCase
from django.contrib.auth.models import User

from challenge.models import Path, Challenge, CompletedChallenge


class PathTestCase(TestCase):
    
    def setUp(self):
        self.easy_path = Path.objects.create(name='Easy Path')

    def test_create(self):
        self.assertIsInstance(self.easy_path, Path)

    def test_as_dict(self):
        easy_dict = self.easy_path.as_dict()
        self.assertEqual(easy_dict.get('name'), self.easy_path.name)
        self.assertIn('challenges', easy_dict)
        self.assertEqual(easy_dict.get('pk'), self.easy_path.pk)


class ChallengeTestCase(TestCase):

    def setUp(self):
        self.no_path = Challenge.objects.create(
            name='Easy',
            encrypted='GRFG',
            decrypted='TEST',
            description='This message was encrypted using ROT13'
        )
        path = Path.objects.create(name='Path')
        self.has_path = Challenge.objects.create(
            name='Medium',
            encrypted='ZRQVHZ',
            decrypted='MEDIUM',
            description='This message was encrypted using ROT13'
        )
        path.challenge_set.add(self.has_path)

    def test_create(self):
        self.assertIsInstance(self.no_path, Challenge)
        self.assertIsNone(self.no_path.path)
        self.assertIsInstance(self.has_path, Challenge)
        self.assertIsInstance(self.has_path.path, Path)

    def test_as_dict(self):
        no_path_dict = self.no_path.as_dict()
        self.assertEqual(no_path_dict.get('pk'), self.no_path.pk)
        self.assertEqual(no_path_dict.get('name'), self.no_path.name)
        self.assertEqual(no_path_dict.get('encrypted'), self.no_path.encrypted)
        self.assertEqual(no_path_dict.get('description'), self.no_path.description)
        # as_dict does not include the decrypted message
        self.assertNotIn('decrypted', no_path_dict)

    def test_decrypted_dict(self):
        no_path_dict = self.no_path.decrypted_dict()
        # decrypted_dict returns the same dict as as_dict, but with the addition
        # of the decrypted message
        self.assertIn('decrypted', no_path_dict)

class CompletedChallengeTestCase(TestCase):

    def setUp(self):
        self.user = User.objects.create(username='Foo', password='BarBazQuux')
        self.no_path = Challenge.objects.create(
            name='Easy',
            encrypted='GRFG',
            decrypted='TEST',
            description='This message was encrypted using ROT13'
        )
        path = Path.objects.create(name='Path')
        self.has_path = Challenge.objects.create(
            name='Medium',
             encrypted='ZRQVHZ',
             decrypted='MEDIUM',
             description='This message was encrypted using ROT13'
        )
        path.challenge_set.add(self.has_path)

        self.c_no_path = CompletedChallenge.objects.create(
            user=self.user,
            challenge=self.no_path
        )
        self.c_has_path = CompletedChallenge.objects.create(
            user=self.user,
            challenge=self.has_path
        )

    def test_create(self):
        self.assertIsInstance(self.c_no_path, CompletedChallenge)
        self.assertIsInstance(self.c_has_path, CompletedChallenge)

    def test_as_dict(self):
        no_dict = self.c_no_path.as_dict()
        has_dict = self.c_has_path.as_dict()
        self.assertIn('decrypted', no_dict)
        self.assertIn('decrypted', has_dict)
