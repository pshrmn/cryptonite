import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { CuriProvider } from '@curi/react';

import client from './apolloClient';

import Header from './components/Header';
import Footer from './components/Footer';

import 'scss/base.scss';
import 'scss/main.scss';

export default ({ router }) => {
  ReactDOM.render((
    <ApolloProvider client={client}>
      <CuriProvider router={router}>
        {({ response }) => {
            const { body:Body } = response;
            return (
              <div id='app-base'>
                <Header />
                <main>
                  <div className='container'>
                    <Body response={response} />
                  </div>
                </main>
                <Footer />
              </div>
            );
        }}
      </CuriProvider>
    </ApolloProvider>
  ), document.querySelector('#app-holder'));
};
