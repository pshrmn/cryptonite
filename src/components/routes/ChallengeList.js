import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'curi-react';

import ChallengeItem from 'components/challenges/ChallengeItem';

import 'scss/challenges-list.scss';


const ChallengeList = (props) => (
  <div className='challenges-list'>
    <ol>
      {
        props.challenges.map(c => (
          <li key={c.pk}>
            {
              c.can_do ? (
                <Link to='Challenge' params={{ challengeId: c.pk }}>
                  <ChallengeItem {...c} />
                </Link>
              ) : (
                <ChallengeItem {...c} />
              )
            }
          </li>
        ))
      }
    </ol>
  </div>
);

export default connect(
  state => ({
    challenges: state.challenges
  })
)(ChallengeList);
