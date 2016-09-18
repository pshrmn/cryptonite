import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import Header from './Header';
import Footer from './Footer';
import Index from './Index';
import Lessons from './lessons/Lessons';
import Challenges from './challenges/Challenges';
import Tools from './tools/Tools';
import {
  Login,
  Signup,
  Profile
} from './auth';
import NotFound from './NotFound';
import MatchWhenAuthorized from './MatchWhenAuthorized';

import '../scss/Base.scss';

export default props => (
  <BrowserRouter>
    <div id='app-base'>
      <Header />
      <main>
        <Match pattern='/' exactly component={Index} />
        <Match pattern='/learn' component={Lessons} />
        <Match pattern='/challenges' component={Challenges} />
        <Match pattern='/tools' component={Tools} />
        <Match pattern='/login' component={Login} />
        <Match pattern ='/signup' component={Signup} />
        <MatchWhenAuthorized pattern='/profile' component={Profile} />
        <Miss component={NotFound} />
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);
