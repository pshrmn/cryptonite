import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
import Cheat from './Cheat';
import protect from './protect'

import 'scss/main.scss';

export default (props) => (
  <main>
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/learn' component={Lessons} />
        <Route path='/challenges' component={protect(Challenges)} />
        <Route path='/tools' component={Tools} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/profile' component={protect(Profile)} />
        <Route path='/cheat' component={Cheat} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </main>
)