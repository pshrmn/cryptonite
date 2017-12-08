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

const routes = [
  // homepage
  {
    name: 'Home',
    path: '',
    match: {
      response({ set }) {
        set.body(Home);
      }
    }
  },
  // user
    {
    name: 'Login',
    path: 'login',
    match: {
      response({ set }) {
        set.body(Login);
      }
    }
  },
  {
    name: 'Signup',
    path: 'signup',
    match: {
      response({ set }) {
        set.body(Signup);
      }
    }
  },
  {
    name: 'Profile',
    path: 'profile',
    match: {
      response({ set }) {
        set.body(Profile);
      }
    },
    children: [
      {
        name: 'Change Password',
        path: 'change-password',
        match: {
          response({ set }) {
            set.body(ChangePassword);
          }
        }
      }
    ]
  },
  // core
  {
    name: 'Lessons',
    path: 'learn',
    match: {
      response({ set }) {
        set.body(LessonList);
      }
    },
    children: [
      {
        name: 'Lesson',
        path: ':lessonSlug',
        match: {
          response({ set }) {
            set.body(Lesson);
          }
        }
      }
    ]
  },
  {
    name: 'Challenges',
    path: 'challenges',
    match: {
      response({ set }) {
        set.body(ChallengeList);
      }
    },
    children: [
      {
        name: 'Challenge',
        path: ':challengeId',
        match: {
          response({ set }) {
            set.body(Challenge);
          }
        }
      }
    ]
  },
  {
    name: 'Tools',
    path: 'tools',
    match: {
      response({ set }) {
        set.body(Tools);
      }
    },
    children: [
      {
        name: 'Shift Tools',
        path: 'shift',
        match: {
          response({ set }) {
            set.body(ShiftTools);
          }
        }
      },
      {
        name: 'Vigenere Tools',
        path: 'vigenere',
        match: {
          response({ set }) {
            set.body(VigenereTools);
          }
        }
      }
    ]
  },
  {
    name: 'Cheat',
    path: 'cheat',
    match: {
      response({ set }) {
        set.body(Cheat);
      }
    }
  }
];

export default routes;
