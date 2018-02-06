import React from 'react';
import { compose, graphql } from 'react-apollo';

import { Errors } from 'components/inputs';
import ChallengeItem from 'components/challenges/ChallengeItem';
import ToolLoader from 'components/tools/ToolLoader';
import Spinner from 'components/Spinner';

import { CHALLENGE_QUERY } from 'api/queries';
import { CHECK_CHALLENGE_MUTATION } from 'api/mutations'
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
    const { checkChallenge, data } = this.props;
    checkChallenge({
      variables: { id: data.challenge.id, message: this.state.message }
    })
      .then(resp => {
        const {
          success,
          errors,
          user
        } = resp.data.checkChallenge;
        if ( success ) {
          this.setState({ checking: false, errors: [] });
        } else {
          const errorsObject = errors.reduce((acc, { key, value }) => {
            acc[key] = value;
            return acc;
          }, {});
          return Promise.reject(errorsObject);
        }
      })
      .catch(errors => {
        this.setState({
          checking: false,
          errors
        });
      })
  }

  render() {
    const {
      challenge = {}
    } = this.props.data;

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

export default compose(
  graphql(CHALLENGE_QUERY, {
    options: ({ response }) => ({ variables: { id: response.params.challengeId} })
  }),
  graphql(CHECK_CHALLENGE_MUTATION, {
    name: 'checkChallenge'
  })
)(Challenge);

