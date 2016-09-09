import React from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Errors } from './inputs';
import {
  challenge as fetchChallenge,
  check as checkChallenge
} from '../api/challenge';
import { loadChallenge } from '../actions';

const Challenge = React.createClass({
  getInitialState: function() {
    return {
      errors: undefined,
      message: '',
      decrypted: false
    };
  },
  componentDidMount: function() {
    const {
      challenge,
      challengeID,
      loadChallenge
    } = this.props;
    if ( this.props.challenge === undefined ) {
      fetchChallenge(challengeID)
        .then(resp => resp.json())
        .then(resp => {
          if ( resp.success ) {
            loadChallenge(resp.challenge);
          } else {
            return Promise.reject(resp.errors)
          }
        })
        .catch(errors => {
          this.setState({
            errors
          });
        });
    }
  },
  handleMessage: function(event) {
    this.setState({
      message: event.target.value
    });
  },
  checkMessage: function(event) {
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
  },
  render: function() {
    const {
      user,
      challenge = {},
      challengeID
    } = this.props;
    const {
      errors = {},
      message,
      decrypted
    } = this.state;

    // only a logged in user that is logged in can do challenges. Include a
    // 'nextPathname' state variable in the Links so that when a user logs in or
    // signs up, they will be redirected back to the challenge
    if ( !user || !user.authenticated ) {
      const redirectState = {
        nextPathname: `/challenge/${challengeID}`
      };
      return (
        <div>
          <p>
            You must be logged in to do the challenges. If you have an account, please
            {' '}<Link to={{pathname: '/login', state: redirectState}}>login</Link>.
            Otherwise, you can
            {' '}<Link to={{pathname: '/signup', state: redirectState}}>create</Link>{' '}
            a new account.
          </p>
        </div>
      );
    }
    return (
      <div className='challenge'>
        <h1>{challenge.name }{ decrypted || challenge.completed ? '✓' : null}</h1>
        { challenge.description }
        <p className='encrypted'>
          { challenge.encrypted }
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
});

export default connect(
  (state, ownProps) => {
    const { challengeID } = ownProps;
    return {
      user: state.user,
      challenge: state.challenges[challengeID]
    }
  },
  {
    loadChallenge
  }
)(Challenge);