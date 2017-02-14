import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import 'scss/base.scss';

export default props => (
  <BrowserRouter>
    <div id='app-base'>
      <Header />
      <Main />
      <Footer />
    </div>
  </BrowserRouter>
);
