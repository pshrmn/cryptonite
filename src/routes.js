import client from './apolloClient';

// components
import {
  Home,
  Login,
  Signup,
  Profile,
  ChangePassword,
  LessonList,
  Lesson,
  ChallengeList,
  Challenge,
  Tools,
  ShiftTools,
  VigenereTools,
  Cheat
} from './components/routes';

// loading related
import { challenge as challengeQuery, allChallenges as allChallengesQuery } from 'api/queries';
import {
  loadChallenges,
  loadChallenge
} from './actions';

// some reusable load functions
function goHomeWhenAlreadyAuthorized(params, responseCreator) {
  if (userInStore()) {
    responseCreator.redirect({ to: 'Home' });
  }
}

function goToLoginWhenNotAuthorized(params, responseCreator) {
  if (!userInStore()) {
    responseCreator.redirect({ to: 'Login' });
  }
}

const routes = [
  // homepage
  {
    name: 'Home',
    path: '',
    body: () => Home
  },
  // user
    {
    name: 'Login',
    path: 'login',
    body: () => Login,
    //load: goHomeWhenAlreadyAuthorized
  },
  {
    name: 'Signup',
    path: 'signup',
    body: () => Signup,
    //load: goHomeWhenAlreadyAuthorized
  },
  {
    name: 'Profile',
    path: 'profile',
    body: () => Profile,
    children: [
      {
        name: 'Change Password',
        path: 'change-password',
        body: () => ChangePassword
      }
    ]
  },
  // core
  {
    name: 'Lessons',
    path: 'learn',
    body: () => LessonList,
    children: [
      {
        name: 'Lesson',
        path: ':lessonSlug',
        body: () => Lesson
      }
    ]
  },
  {
    name: 'Challenges',
    path: 'challenges',
    body: () => ChallengeList,
    /*load: (params, responseCreator) => {
      if (!userInStore()) {
        responseCreator.redirect({
          to: 'Login',
          details: { search: '?next=/challenges' }
        });
      }
    },*/
    children: [
      {
        name: 'Challenge',
        path: ':challengeId',
        body: () => Challenge,
        /*load: (params, responseCreator) => {
          if (!userInStore()) {
            responseCreator.redirect({
              to: 'Login'
            });
          }
        }*/
      }
    ]
  },
  {
    name: 'Tools',
    path: 'tools',
    body: () => Tools,
    children: [
      {
        name: 'Shift Tools',
        path: 'shift',
        body: () => ShiftTools
      },
      {
        name: 'Vigenere Tools',
        path: 'vigenere',
        body: () => VigenereTools
      }
    ]
  },
  {
    name: 'Cheat',
    path: 'cheat',
    body: () => Cheat
  }
];

export default routes;
