import Base from './route-components/Base';
import Index from './route-components/Index';
import {
  Login,
  Signup,
  Profile,
  ChangePassword
} from './route-components/auth';
import Learn from './route-components/Learn';
import {
  CryptoIntro,
  ShiftCipher
} from './route-components/lessons';
import Challenges from './route-components/Challenges';
import Challenge from './route-components/Challenge';
import Tools from './route-components/ToolsPage';
import {
  ShiftTools
} from './route-components/tools';
/*
 * This function takes two functions, requireAuth and requireUnauth.
 * The requireAuth function can be placed on routes that require the
 * user to be logged in to view them. The requireUnauth can be placed
 * on routes that require that user to not be logged in to view them.
 */
export default function (requireAuth, requireUnauth) {
  return {
    path: '/',
    component: Base,
    indexRoute: { component: Index },
    childRoutes: [
      {
        path: 'login',
        component: Login,
        onEnter: requireUnauth
      },
      {
        path: 'signup',
        component: Signup,
        onEnter: requireUnauth
      },
      {
        path: 'profile',
        component: Profile,
        onEnter: requireAuth,
      },
      {
        path: 'profile/change-password',
        component: ChangePassword,
        onEnter: requireAuth
      },
      {
        path: 'learn',
        component: Learn
      },
      {
        path: 'learn/crypto-intro',
        component: CryptoIntro
      },
      {
        path: 'learn/shift-cipher',
        component: ShiftCipher
      },
      {
        path: 'challenges',
        component: Challenges
      },
      {
        path: 'challenge/:challengeID',
        component: Challenge
      },
      {
        path: 'tools',
        component: Tools
      },
      {
        path: 'tools/shift',
        component: ShiftTools
      }
    ]
  };
}
