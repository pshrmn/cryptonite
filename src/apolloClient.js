import { ApolloClient } from 'apollo-client';
import { toIdValue } from 'apollo-utilities';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, from } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { getCSRFToken } from './helpers/csrf';

function dataIdFromObject (result) {
  if (result.__typename) {
    if (result.id !== undefined) {
      return `${result.__typename}:${result.id}`;
    }
  }
  return null;
}

const link = new HttpLink({
  url: '/graphql',
  credentials: 'same-origin'
});

const header = new ApolloLink((operation, forward) => {
  operation.setContext(
    ({ headers = {} }) => {
      return {
        headers: {
          ...headers,
          'X-CSRFToken': getCSRFToken()
        }
      }
    }
  );
  
  return forward(operation);
});
const cache = new InMemoryCache({
  // maybe?
  cacheResolvers: {
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

const client = new ApolloClient({
  link: from([header, link ]),
  cache,
  dataIdFromObject
});

export default client;
