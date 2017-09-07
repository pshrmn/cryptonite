import React from 'react';

import { locked, unlocked, star } from 'components/symbols';
import 'scss/challenge-item.scss';

export default (props) => (
  <div className='challenge-item'>
    <div className='challenge-info'>
      <div className='title'>
        <h2>{props.name}</h2>
        <div className='tags'>
          <div className={props.completed ? 'tag status done' : 'tag status'}>
            {props.points}
            {
              props.completed ? star : 
                (props.canDo ? unlocked : locked)
            }
          </div>
          <Tag text={props.cipher} />
        </div>
      </div>
    </div>
    <div className='byline'>
      {
        props.canDo ?
          null :
          `You need ${props.pointsRequired} points to attempt this challenge.`
      }
    </div>
    <div className='description'>
      {props.canDo ? props.description : null}
    </div>
  </div>
);

const Tag = props => (
  <div className={['tag', 'cipher-tag', props.text.toLowerCase()].join(' ')}>
    { props.text }
  </div>
);

Tag.defaultProps = {
  text: ''
}
