import React from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Errors } from '../inputs';
import {
  challenge as fetchChallenge,
  check as checkChallenge
} from '../../api/challenge';
import { loadChallenge } from '../../actions';

import '../../scss/challenge.scss';


class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: undefined,
      message: '',
      decrypted: false
    };
    // start loading the challenge if it isn't already loaded
    const {
      challenge,
      challengeID,
      loadChallenge
    } = props;
    if ( props.challenge === undefined ) {
      fetchChallenge(challengeID)
        .then(resp => resp.json())
        .then(resp => {
          if ( resp.success ) {
            loadChallenge(resp.challenge);
          } else {
            this.setState({errors: resp.errors});
          }
        })
        .catch(err => {
          console.error(err);
        });
    }

    this.handleMessage = this.handleMessage.bind(this);
    this.checkMessage = this.checkMessage.bind(this);
  }

  handleMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  checkMessage(event) {
    event.preventDefault();
    checkChallenge(this.props.challengeID, this.state.message)
      .then(resp => resp.json())
      .then(resp => {
        if ( resp.success ) {
            this.setState({
              decrypted: true,
              errors: {}
            });
          } else {
            return Promise.reject(resp.errors)
          }
      })
      .catch(errors => {
        this.setState({
          errors
        });
      })
  }

  render() {
    const {
      challenge = {},
      challengeID
    } = this.props;
    const {
      errors = {},
      message,
      decrypted
    } = this.state;

    return (
      <div className='challenge'>
        <h1>{challenge.name }{ decrypted || challenge.completed ? '✓' : null}</h1>
        { challenge.description }
        <p className='problem'>
          { challenge.problem }
        </p>
        <form onSubmit={this.checkMessage}>
          <Errors errors={errors['__all__']} />
          <textarea className='decrypted' value={message} onChange={this.handleMessage} />
          <div>
            <button>Check</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => {
    let { challengeID } = ownProps.params;
    challengeID = parseInt(challengeID, 10);
    return {
      challenge: state.challenges.find(c => c.pk === challengeID),
      challengeID
    }
  },
  {
    loadChallenge
  }
)(Challenge);