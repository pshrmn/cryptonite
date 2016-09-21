import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Errors } from '../inputs';
import { all_challenges } from '../../api/challenge';
import { loadChallenges } from '../../actions';
import {
  locked,
  unlocked,
  completed
} from '../symbols';

import '../../scss/challenges-list.scss';

class ChallengeList  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };

    // load the challenges from the server every time this mounts
    // this might be overkill, but helps to ensure that the user
    // always has the most up to date challenges
    all_challenges()
      .then(resp => resp.json())
      .then(resp => {
        if ( resp.success ) {
          this.props.loadChallenges(resp.challenges);
        } else {
          this.setState({errors: resp.errors});
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { 
      errors = {}
    } = this.state;
    
    return (
      <div className='challenges-list'>
        <Errors errors={errors['__all__']} />
        <ol>
          {
            this.props.challenges.map(c => (
              <li key={c.pk}
                className='challenge-item'>
                <div className='status'>
                  { c.completed ? completed : 
                    (c.can_do ? unlocked : locked)
                  }
                  {
                    c.completed ? c.points : 0
                  }/{c.can_do ? c.points : '???'}
                </div>
                <div>
                  <div>
                    {
                      c.can_do ? (
                        <Link to={`/challenges/${c.pk}`}>{c.name}</Link>
                      ) : (
                        c.name
                      )
                    }
                  </div>
                  <div className='byline'>
                    {
                      c.can_do ? c.description : `Need ${c.points_required} points to attempt this challenge`
                    }
                  </div>
                </div>
              </li>
            ))
          }
        </ol>
      </div>
    );
  }
}

export default connect(
  state => ({
    challenges: state.challenges
  }),
  {
    loadChallenges
  }
)(ChallengeList);
