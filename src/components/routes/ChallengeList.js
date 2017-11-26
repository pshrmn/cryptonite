import React from 'react';
import { graphql } from 'react-apollo';

import { ALL_CHALLENGES_QUERY } from 'api/queries';
import { Link } from '@curi/react';

import ChallengeItem from 'components/challenges/ChallengeItem';

import 'scss/challenges-list.scss';


const ChallengeList = ({ data }) => {
  const { allChallenges } = data;

  if (!allChallenges || !allChallenges.length) {
    return (
      <div className='challenges-list'>
        You must be logged in to view the challenges
      </div>
    );
  }

  return (
    <div className='challenges-list'>
      <ol>
        {
          data.allChallenges && data.allChallenges.map(c => (
            <li key={c.id}>
              {
                c.canDo
                  ? <Link to='Challenge' params={{ challengeId: c.id }}>
                      <ChallengeItem {...c} />
                    </Link>
                  : <ChallengeItem {...c} />
              }
            </li>
          ))
        }
      </ol>
    </div>
  );
};

export default graphql(ALL_CHALLENGES_QUERY)(ChallengeList);
