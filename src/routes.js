import Base from './route-components/Base';
import Index from './route-components/Index';
import Login from './route-components/Login';
import Signup from './route-components/Signup';

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
    }
  ]
};
