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
function goHomeWhenAlreadyAuthorized(responseCreator) {
  const { user } = store.getState();
  if (user && user.authenticated) {
    responseCreator.redirect({ to: 'Home' });
  }
}

function goToLoginWhenNotAuthorized(responseCreator) {
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
    value: Home
  },
  // user
    {
    name: 'Login',
    path: 'login',
    value: Login,
    load: goHomeWhenAlreadyAuthorized
  },
  {
    name: 'Signup',
    path: 'signup',
    value: Signup,
    load: goHomeWhenAlreadyAuthorized
  },
  {
    name: 'Profile',
    path: 'profile',
    value: Profile,
    children: [
      {
        name: 'Change Password',
        path: 'change-password',
        value: ChangePassword
      }
    ]
  },
  // core
  {
    name: 'Lessons',
    path: 'learn',
    value: LessonList,
    children: [
      {
        name: 'Lesson',
        path: ':lessonSlug',
        value: Lesson
      }
    ]
  },
  {
    name: 'Challenges',
    path: 'challenges',
    value: ChallengeList,
    load: (responseCreator) => {
      // loading the challenges from the server every time this mounts
      // this might be overkill, but helps to ensure that the user
      // always has the most up to date challenges
      const { user } = store.getState();
      if (!user || !user.authenticated) {
        responseCreator.redirect({ name: 'Login' });
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
        value: Challenge,
        load: (responseCreator) => {
          const { user } = store.getState();
          if (!user || !user.authenticated) {
            responseCreator.redirect({ name: 'Login' });
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
    value: Tools,
    children: [
      {
        name: 'Shift Tools',
        path: 'shift',
        value: ShiftTools
      },
      {
        name: 'Vigenere Tools',
        path: 'vigenere',
        value: VigenereTools
      }
    ]
  },
  {
    name: 'Cheat',
    path: 'cheat',
    value: Cheat
  }
];

export default routes;
