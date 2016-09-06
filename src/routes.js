import Base from './route-components/Base';
import Index from './route-components/Index';
import {
  Login,
  Signup,
  ChangePassword
} from './route-components/auth';

export default {
  path: '/',
  component: Base,
  indexRoute: { component: Index },
  childRoutes: [
    {
      path: 'login',
      component: Login
    },
    {
      path: 'signup',
      component: Signup
    },
    {
      path: 'change-password',
      component: ChangePassword
    }
  ]
};
