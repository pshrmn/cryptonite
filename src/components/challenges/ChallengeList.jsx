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
      <div>
        <h1>Challenges</h1>
        <Errors errors={errors['__all__']} />
        <ol>
          {
            this.props.challenges.map(c => (
              <li key={c.pk}>
                { c.completed ? completed : 
                  (c.can_do ? unlocked : locked)
                }
                {
                  c.can_do ? (
                    <Link to={`/challenges/${c.pk}`}>{c.name}</Link>
                  ) : (
                    <span title={`${c.points_required} points needed to attempt this challenge.`}>
                      {c.name}
                    </span>
                  )
                }
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
