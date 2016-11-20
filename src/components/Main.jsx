import React from 'react';
import { Match, Miss } from 'react-router';

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
import Cheat from './Cheat';

import 'scss/main.scss';

export default (props) => (
  <main>
    <div className='container'>
      <Match pattern='/' exactly component={Index} />
      <Match pattern='/learn' component={Lessons} />
      <Match pattern='/challenges' component={Challenges} />
      <Match pattern='/tools' component={Tools} />
      <Match pattern='/login' component={Login} />
      <Match pattern='/signup' component={Signup} />
      <MatchWhenAuthorized pattern='/profile' component={Profile} />
      <Match pattern='/cheat' component={Cheat} />
      <Miss component={NotFound} />
    </div>
  </main>
)