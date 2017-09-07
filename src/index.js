import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import createHistory from 'history/createBrowserHistory';
import createConfig from 'curi';
import { Navigator } from 'curi-react';
import { parse } from 'qs';
import createQueryMiddleware from 'curi-middleware-query';

import client from './apolloClient';
import routes from './routes';
import renderFunction from './renderFunction';

const history = createHistory();
const queryMiddleware = createQueryMiddleware(parse);

const config = createConfig(history, routes, {
  middleware: [queryMiddleware]
});

config.ready().then(() => {
  ReactDOM.render((
    <ApolloProvider client={client}>
      <Navigator config={config}>
        {renderFunction}
      </Navigator>
    </ApolloProvider>
  ), document.querySelector('#app-holder'));  
});
