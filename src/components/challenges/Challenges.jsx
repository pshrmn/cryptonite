import React from 'react';
import { Match } from 'react-router';

import MatchWhenAuthorized from '../MatchWhenAuthorized';
import Challenge from './Challenge';
import ChallengeList from './ChallengeList';

export default ({pathname}) => (
  <div>
    <Match
      pattern={`${pathname}`}
      exactly
      component={ChallengeList} />
    <MatchWhenAuthorized
      pattern={`${pathname}/:challengeID`}
      component={Challenge} />
  </div>
);
