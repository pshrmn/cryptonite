import React from 'react';
import { Link } from 'react-router';

import {
  locked,
  unlocked,
  star
} from 'components/symbols';
import 'scss/challenge-item.scss';

export default (props) => (
  <div className='challenge-item'>
    <div className='possible-points'>
      <span className={props.completed ? 'status done' : 'status'}>
        {props.points}
        {
          props.completed ? star : 
            (props.can_do ? unlocked : locked)
        }
      </span>
    </div>
    <div>
      <div>
        {
          props.can_do ? (
            <Link to={`/challenges/${props.pk}`}>{props.name}</Link>
          ) : (
            props.name
          )
        }
        <Tag text={props.cipher} />
      </div>
      <div className='description'>
        {props.description}
      </div>
      <div className='byline'>
        {
          props.can_do ?
            null :
            `You need ${props.points_required} points to attempt this challenge.`
        }
      </div>
    </div>
  </div>
);

const Tag = props => (
  <div className={['cipher-tag', props.text.toLowerCase()].join(' ')}>
    { props.text }
  </div>
);
