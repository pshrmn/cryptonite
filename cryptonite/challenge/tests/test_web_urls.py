from django.test import TestCase
from django.core.urlresolvers import reverse
from django.urls.exceptions import NoReverseMatch


class APIUrlsTestCase(TestCase):

    def setUp(self):
        self.start = '/challenges'

    def test_all_challenges(self):
        url = reverse('challenge-web-all')
        self.assertEqual(url, '{}/'.format(self.start))

    def test_challenge(self):
        good_keys = [0, 1, 7, '8']
        for key in good_keys:
            url = reverse('challenge-web-challenge', kwargs={'pk': key})
            self.assertEqual(url, '{}/{}'.format(self.start, key))
        bad_keys = ['foo', '', None]
        for key in bad_keys:
            with self.assertRaises(NoReverseMatch):
                reverse('challenge-web-challenge', kwargs={'pk': key})

