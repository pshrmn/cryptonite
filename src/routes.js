import Base from './route-components/Base';
import Index from './route-components/Index';
import Login from './route-components/Login';
import Signup from './route-components/Signup';
import ChangePassword from './route-components/ChangePassword';

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
