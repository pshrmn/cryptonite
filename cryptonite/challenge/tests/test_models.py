from django.test import TestCase
from django.contrib.auth.models import User

from challenge.models import Challenge


class ChallengeTestCase(TestCase):

    def setUp(self):
        self.easy = Challenge.objects.create(
            name='Easy',
            encrypted='GRFG',
            decrypted='TEST',
            description='This message was encrypted using ROT13'
        )

    def test_create(self):
        self.assertIsInstance(self.easy, Challenge)

    def test_as_dict(self):
        easy_dict = self.easy.as_dict()
        self.assertEqual(easy_dict.get('pk'), self.easy.pk)
        self.assertEqual(easy_dict.get('name'), self.easy.name)
        self.assertEqual(easy_dict.get('encrypted'), self.easy.encrypted)
        self.assertEqual(easy_dict.get('description'), self.easy.description)
        # as_dict does not include the decrypted message
        self.assertNotIn('decrypted', easy_dict)

    def test_decrypted_dict(self):
        easy_dict = self.easy.decrypted_dict()
        # decrypted_dict returns the same dict as as_dict, but with the addition
        # of the decrypted message
        self.assertIn('decrypted', easy_dict)
