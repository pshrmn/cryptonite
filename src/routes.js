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
    body: () => Home
  },
  // user
    {
    name: 'Login',
    path: 'login',
    body: () => Login,
  },
  {
    name: 'Signup',
    path: 'signup',
    body: () => Signup,
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
    children: [
      {
        name: 'Challenge',
        path: ':challengeId',
        body: () => Challenge
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
