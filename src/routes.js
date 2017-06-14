import store from './store';

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
import { all_challenges, challenge as fetchChallenge } from 'api/challenge';
import {
  loadChallenges,
  loadChallenge
} from './actions';

// some reusable load functions
function goHomeWhenAlreadyAuthorized(params, responseCreator) {
  const { user } = store.getState();
  if (user && user.authenticated) {
    responseCreator.redirect({ to: 'Home' });
  }
}

function goToLoginWhenNotAuthorized(params, responseCreator) {
  const { user } = store.getState();
  if (!user || !user.authenticated) {
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
    load: goHomeWhenAlreadyAuthorized
  },
  {
    name: 'Signup',
    path: 'signup',
    body: () => Signup,
    load: goHomeWhenAlreadyAuthorized
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
    load: (params, responseCreator) => {
      // loading the challenges from the server every time this mounts
      // this might be overkill, but helps to ensure that the user
      // always has the most up to date challenges
      const { user } = store.getState();
      if (!user || !user.authenticated) {
        responseCreator.redirect({
          to: 'Login',
          details: { search: '?next=/challenges' }
        });
      } else {
        return all_challenges()
          .then(resp => resp.json())
          .then(resp => {
            if (resp.success) {
              store.dispatch(
                loadChallenges(resp.challenges)
              );
              const state = store.getState();
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    children: [
      {
        name: 'Challenge',
        path: ':challengeId',
        body: () => Challenge,
        load: (params, responseCreator) => {
          const { user } = store.getState();
          if (!user || !user.authenticated) {
            responseCreator.redirect({
              to: 'Login'
            });
          } else {
            // load data when the user is authenticated
            const { params } = responseCreator;
            return fetchChallenge(params.challengeId)
              .then(resp => resp.json())
              .then(resp => {
                if (resp.success) {
                  store.dispatch(
                    loadChallenge(resp.challenge)
                  );
                }
              })
              .catch(err => {
                console.error(err);
              });
          }
        }
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
