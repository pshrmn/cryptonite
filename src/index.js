import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import Browser from '@hickory/browser';
import createConfig from '@curi/core';
import { Navigator } from '@curi/react';
import { parse, stringify } from 'qs';

import client from './apolloClient';
import routes from './routes';
import renderFunction from './renderFunction';

const history = Browser({
  query: { parse, stringify }
});

const config = createConfig(history, routes);
const root = document.querySelector('#app-holder');

config.subscribe((response, action) => {
  ReactDOM.render((
    <ApolloProvider client={client}>
      <Navigator
        response={response}
        action={action}
        config={config}
        render={renderFunction}
      />
    </ApolloProvider>
  ), root);
});
