import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import 'scss/base.scss';
import 'scss/main.scss';

export default function renderFunction(response) {
  const { body:Body, params, query, location } = response;
  return (
    <div id='app-base'>
      <Header />
      <main>
        <div className='container'>
          <Body params={params} query={query} location={location} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
