const routes = [
  // homepage
  {
    name: 'Home',
    path: '',
    match: {
      initial: () => import(/* webpackChunkName: 'Home' */'./components/routes/Home')
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
      initial: () => import(/* webpackChunkName: 'Login' */'./components/routes/Login')
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
      initial: () => import(/* webpackChunkName: 'Signup' */'./components/routes/Signup')
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
      initial: () => import(/* webpackChunkName: 'Profile' */'./components/routes/Profile')
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
          initial: () => import(/* webpackChunkName: 'ChangePassword' */'./components/routes/ChangePassword')
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
      initial: () => import(/* webpackChunkName: 'LessonList' */'./components/routes/LessonList')
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
          initial: () => import(/* webpackChunkName: 'Lesson' */'./components/routes/Lesson')
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
      initial: () => import(/* webpackChunkName: 'ChallengeList' */'./components/routes/ChallengeList')
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
          initial: () => import(/* webpackChunkName: 'Challenge' */'./components/routes/Challenge')
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
      initial: () => import(/* webpackChunkName: 'Tools' */'./components/routes/Tools')
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
          initial: () => import(/* webpackChunkName: 'ShiftTools' */'./components/routes/ShiftTools')
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
          initial: () => import(/* webpackChunkName: 'VigenereTools' */'./components/routes/VigenereTools')
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
      initial: () => import(/* webpackChunkName: 'Cheat' */'./components/routes/Cheat')
        .then(module => module.default),
      response:({ resolved, set }) => {
        set.body(resolved.initial);
      }
    }
  }
];

export default routes;
