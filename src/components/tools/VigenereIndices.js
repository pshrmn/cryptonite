import React from 'react';

import 'scss/vigenere.scss';

export default class VigenereIndices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      message: ''
    };
    this.keywordHandler = this.keywordHandler.bind(this);
    this.messageHandler = this.messageHandler.bind(this);
  }

  keywordHandler(event) {
    this.setState({
      keyword: event.target.value
    })
  }

  messageHandler(event) {
    this.setState({
      message: event.target.value
    })
  }
  
  render() {
    const {
      keyword,
      message
    } = this.state;
    return (
      <div>
        <p>
          <input type='text'
                 value={keyword}
                 onChange={this.keywordHandler}
                 placeholder='Keyword' />
        </p>
        <p>
          <input type='text'
                 value={message}
                 onChange={this.messageHandler}
                 placeholder='Message' />
        </p>
        <MappedChars length={keyword.length} message={message.toUpperCase()} />
      </div>
    );
  }
}


const MappedChars = (props) => {
  // if length is 0, React will complain because numbers
  // modulo 0 are NaN
  const length = props.length || 1;
  const message = props.message;
  const isLetter = /[A-Z]/;
  let rollingIndex = 0;

  const indices = message
    .split('')
    .map((char, index) => (
      <div key={index} className='char-index'>
        <span className='char'>
          { char }
        </span>
        {
          isLetter.test(char) ? (
            <span className='index'>
              { rollingIndex++ % length}
            </span>
          ) : null
        }
      </div>
    ))

  return (
    <div className='vigenere-indices'>
      { indices }
    </div>
  );
}
