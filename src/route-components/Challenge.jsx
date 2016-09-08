import React from 'react';

import Challenge from '../components/Challenge';

export default function ChallengeRoute(props) {
  return <Challenge challengeID={props.params.challengeID} />
}