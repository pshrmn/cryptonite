import {
  ApolloClient,
  createNetworkInterface,
  toIdValue
 } from 'react-apollo';
import { getCSRFToken } from './helpers/csrf';

function dataIdFromObject (result) {
  if (result.__typename) {
    if (result.id !== undefined) {
      return `${result.__typename}:${result.id}`;
    }
  }
  return null;
}

const networkInterface = createNetworkInterface({
  uri: '/graphql',
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

export default new ApolloClient({
  networkInterface,
  dataIdFromObject,
  customResolvers: {
    Query: {
      challenge: (info, args) => {
        return toIdValue(
          dataIdFromObject({
            __typename: 'ChallengeType',
            id: args.id
          })
        );
      }
    }
  }
});
