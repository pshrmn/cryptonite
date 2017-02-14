import React from 'react';
import { Switch, Route } from 'react-router-dom';

import protect from 'components/protect'
import Challenge from './Challenge';
import ChallengeList from './ChallengeList';

export default ({ match }) => (
  <Switch>
    <Route exact path={match.url} component={ChallengeList} />
    <Route path={`${match.url}/:challengeID`} component={protect(Challenge)} />
  </Switch>
);
