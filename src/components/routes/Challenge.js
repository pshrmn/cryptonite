import React from 'react';
import { connect } from 'react-redux';

import { Errors } from 'components/inputs';
import ChallengeItem from 'components/challenges/ChallengeItem';
import ToolLoader from 'components/tools/ToolLoader';
import Spinner from 'components/Spinner';

import {
  check as checkChallenge
} from 'api/challenge';
import { completeChallenge } from 'actions';

import 'scss/challenge.scss';


class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: undefined,
      message: '',
      checking: false
    };

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
    this.setState({ checking: true });
    checkChallenge(this.props.challengeId, this.state.message)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({ checking: false });
        if ( resp.success ) {
            this.props.completeChallenge(resp.challenge, resp.new_points);
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
      challengeId
    } = this.props;
    const {
      errors = {},
      message,
      checking
    } = this.state;

    return (
      <div className='challenge'>
        <ChallengeItem {...challenge} />
        <Messages
          input={challenge.problem}
          output={message} />
        <form onSubmit={this.checkMessage}>
          <Errors errors={errors['__all__']} />
          <textarea
            placeholder='Enter message here'
            className='decrypted'
            value={message}
            onChange={this.handleMessage} />
          <div>
            <button className='pos'>Check</button>
            { checking ? <Spinner /> : null }
          </div>
        </form>
        <div>
          <p>
            Need some help? Try using one of these cipher tools.
          </p>
          <ToolLoader />
        </div>
      </div>
    );
  }
}

const Messages = (props) => {
  const {
    input = '',
    output = ''
  } = props;
  return (
    <div className='messages'>
      <Message chars={input.split('')} />
      <Message chars={output.split('')} />
    </div>
  );
};

const Message = ({chars}) => (
  <div className='message'>
    {
      chars.map((char,i) => {
        return (
          <span
            key={i}
            className={char === ' ' ? 'space' : 'char'}>
            { char === ' ' ? String.fromCharCode(160) : char }
          </span>
        );
      })
    }
  </div>
)

export default connect(
  (state, ownProps) => {
    let { challengeId } = ownProps.params;
    challengeId = parseInt(challengeId, 10);
    return {
      challenge: state.challenges.find(c => c.pk === challengeId),
      challengeId
    }
  },
  {
    completeChallenge
  }
)(Challenge);
