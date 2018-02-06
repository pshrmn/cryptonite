const routes = [
  // homepage
  {
    name: 'Home',
    path: '',
    match: {
      initial: () => import(/* webpackChunkName: 'Home' */'./route-components/Home')
        .then(module => module.default),
      response:({ resolved, set }) => {
        set.body(resolved.initial);
      }
    }
  },
  // user
    {
    name: 'Login',
    path: 'login',
    match: {
      initial: () => import(/* webpackChunkName: 'Login' */'./route-components/Login')
        .then(module => module.default),
      response:({ resolved, set }) => {
        set.body(resolved.initial);
      }
    }
  },
  {
    name: 'Signup',
    path: 'signup',
    match: {
      initial: () => import(/* webpackChunkName: 'Signup' */'./route-components/Signup')
        .then(module => module.default),
      response:({ resolved, set }) => {
        set.body(resolved.initial);
      }
    }
  },
  {
    name: 'Profile',
    path: 'profile',
    match: {
      initial: () => import(/* webpackChunkName: 'Profile' */'./route-components/Profile')
        .then(module => module.default),
      response:({ resolved, set }) => {
        set.body(resolved.initial);
      }
    },
    children: [
      {
        name: 'Change Password',
        path: 'change-password',
        match: {
          initial: () => import(/* webpackChunkName: 'ChangePassword' */'./route-components/ChangePassword')
            .then(module => module.default),
          response:({ resolved, set }) => {
            set.body(resolved.initial);
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
      initial: () => import(/* webpackChunkName: 'LessonList' */'./route-components/LessonList')
        .then(module => module.default),
      response:({ resolved, set }) => {
        set.body(resolved.initial);
      }
    },
    children: [
      {
        name: 'Lesson',
        path: ':lessonSlug',
        match: {
          initial: () => import(/* webpackChunkName: 'Lesson' */'./route-components/Lesson')
            .then(module => module.default),
          response:({ resolved, set }) => {
            set.body(resolved.initial);
          }
        }
      }
    ]
  },
  {
    name: 'Challenges',
    path: 'challenges',
    match: {
      initial: () => import(/* webpackChunkName: 'ChallengeList' */'./route-components/ChallengeList')
        .then(module => module.default),
      response:({ resolved, set }) => {
        set.body(resolved.initial);
      }
    },
    children: [
      {
        name: 'Challenge',
        path: ':challengeId',
        match: {
          initial: () => import(/* webpackChunkName: 'Challenge' */'./route-components/Challenge')
            .then(module => module.default),
          response:({ resolved, set }) => {
            set.body(resolved.initial);
          }
        }
      }
    ]
  },
  {
    name: 'Tools',
    path: 'tools',
    match: {
      initial: () => import(/* webpackChunkName: 'Tools' */'./route-components/Tools')
        .then(module => module.default),
      response:({ resolved, set }) => {
        set.body(resolved.initial);
      }
    },
    children: [
      {
        name: 'Shift Tools',
        path: 'shift',
        match: {
          initial: () => import(/* webpackChunkName: 'ShiftTools' */'./route-components/ShiftTools')
            .then(module => module.default),
          response:({ resolved, set }) => {
            set.body(resolved.initial);
          }
        }
      },
      {
        name: 'Vigenere Tools',
        path: 'vigenere',
        match: {
          initial: () => import(/* webpackChunkName: 'VigenereTools' */'./route-components/VigenereTools')
            .then(module => module.default),
          response:({ resolved, set }) => {
            set.body(resolved.initial);
          }
        }
      }
    ]
  },
  {
    name: 'Cheat',
    path: 'cheat',
    match: {
      initial: () => import(/* webpackChunkName: 'Cheat' */'./route-components/Cheat')
        .then(module => module.default),
      response:({ resolved, set }) => {
        set.body(resolved.initial);
      }
    }
  }
];

export default routes;
