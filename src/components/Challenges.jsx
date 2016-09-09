import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Errors } from './inputs';
import { challenges as fetchChallenges } from '../api/challenge';
import { loadChallenges } from '../actions';

const Challenges = React.createClass({
  getInitialState: function() {
    return {
      errors: {}
    }
  },
  componentDidMount: function() {
    fetchChallenges()
      .then(resp => resp.json())
      .then(resp => {
        if ( resp.success ) {
          this.props.loadChallenges(resp.challenges);
        } else {
          return Promise.reject(resp.errors);
        }
      })
      .catch(errors => {
        this.setState({ errors });
      })
  },
  render: function() {
    const {
      challenges = {}
    } = this.props;
    const { 
      errors = {}
    } = this.state;
    const challengeLinks = Object.keys(challenges).map(key => {
      const c = challenges[key];
      return (
        <li key={c.pk} >
          <Link to={{pathname: `/challenge/${c.pk}`}}>{c.name}</Link>
          <span className='completed'>{c.completed ? '✓' : null}</span>
        </li>
      );
    });
    return (
      <div>
        <h1>Challenges</h1>
        <Errors errors={errors['__all__']} />
        <ol>
          { challengeLinks }
        </ol>
      </div>
    );
  }
})

export default connect(
  state => ({
    challenges: state.challenges
  }),
  {
    loadChallenges
  }
)(Challenges);
