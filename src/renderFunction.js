import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { Redirect } from 'curi-react';

import 'scss/base.scss';

export default function renderFunction(response) {
  const { body, params, query, location, redirectTo } = response;
  if (redirectTo) {
    return <Redirect {...redirectTo} />
  }

  const Body = body ? body : null;

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
