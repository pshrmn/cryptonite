from django.test import TestCase
from django.core.urlresolvers import reverse
from django.urls.exceptions import NoReverseMatch


class UrlsTestCase(TestCase):

    def setUp(self):
        self.start = '/api/challenge'

    def test_path(self):
        good_keys = [0, 1, 7, '8']
        for key in good_keys:
            url = reverse('challenge-path', kwargs={'pk': key})
            self.assertEqual(url, '{}/path/{}'.format(self.start, key))
        bad_keys = ['foo', '', None]
        for key in bad_keys:
            with self.assertRaises(NoReverseMatch):
                reverse('challenge-path', kwargs={'pk': key})

    def test_challenge(self):
        good_keys = [0, 1, 7, '8']
        for key in good_keys:
            url = reverse('challenge-challenge', kwargs={'pk': key})
            self.assertEqual(url, '{}/{}/'.format(self.start, key))
        bad_keys = ['foo', '', None]
        for key in bad_keys:
            with self.assertRaises(NoReverseMatch):
                reverse('challenge-challenge', kwargs={'pk': key})

    def test_challenge_check(self):
        good_keys = [0, 1, 7, '8']
        for key in good_keys:
            url = reverse('challenge-check', kwargs={'pk': key})
            self.assertEqual(url, '{}/{}/check'.format(self.start, key))
        bad_keys = ['foo', '', None]
        for key in bad_keys:
            with self.assertRaises(NoReverseMatch):
                reverse('challenge-check', kwargs={'pk': key})
