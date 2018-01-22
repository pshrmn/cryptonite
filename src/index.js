import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import Browser from '@hickory/browser';
import curi from '@curi/core';
import { parse, stringify } from 'qs';

import client from './apolloClient';
import routes from './routes';
import renderFunction from './renderFunction';
import ResponsiveBase from './components/ResponsiveBase';

const history = Browser({
  query: { parse, stringify }
});

const router = curi(history, routes);
const root = document.querySelector('#app-holder');

router.respond((response, action) => {
  ReactDOM.render((
    <ApolloProvider client={client}>
      <ResponsiveBase router={router} render={renderFunction} />
    </ApolloProvider>
  ), root);
});
