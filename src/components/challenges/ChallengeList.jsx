import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ChallengeItem from './ChallengeItem';
import { Errors } from 'components/inputs';

import { all_challenges } from 'api/challenge';
import { loadChallenges } from 'actions';

import 'scss/challenges-list.scss';


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
              <li key={c.pk}>
                {
                  c.can_do ? (
                    <Link to={`/challenges/${c.pk}`}>
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
