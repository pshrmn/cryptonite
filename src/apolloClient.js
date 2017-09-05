import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { getCSRFToken } from './helpers/csrf';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8000/graphql',
  opts: {
    credentials: 'same-origin',
    headers: {}
  }
});

networkInterface.use([{
  applyMiddleware (req, next) {
    req.options.headers['X-CSRFToken'] = getCSRFToken();
    next();
  }
}]);

// just hard coding localhost for testing,
// will need to fix before deploying
export default new ApolloClient({ networkInterface });
