import React from 'react';

import {
  EnglishShiftFactory,
  EnglishVigenereFactory
} from 'ciphers';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unlocked: false
    };

    this.handleUnlock = this.handleUnlock.bind(this);
  }

  handleUnlock() {
    this.setState({ unlocked: true });
  }

  renderLocked() {
    return (
      <div>
        <p>
          You're not supposed to be here. Or are you? Enter the super secret
          password to access the cheat codes.
        </p>
        <SuperSecret unlock={this.handleUnlock} />
      </div>
    );
  }

  renderUnlocked() {
    return (
      <div>
        <p>
          I guess that it's alright for you to be here. Feel free to use the
          cheat tools!
        </p>
        <ShiftCheat />
        <VigenereCheat />
      </div>
    );
  }

  render() {
    const {
      unlocked
    } = this.state;

    return (
      <div>
        <h1>Cheat</h1>
        { unlocked ? this.renderUnlocked() : this.renderLocked() }
      </div>
    );
  }
}

class SuperSecret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };

    // you type hunter2, it shows to us as *******
    this.SUPER_SECRET_PASSWORD = '*******';
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
    if ( event.target.value === this.SUPER_SECRET_PASSWORD ) {
      this.props.unlock();
    }
  }

  render() {
    return (
      <label>
        Password:
        <input
          type='password'
          value={this.state.password}
          onChange={this.handlePassword} />
      </label>
    )
  }
}

/*
 * This expects the English alphabet, so some values
 * are hardcoded for it.
 */
class ShiftCheat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: 0,
      cipher: EnglishShiftFactory(0),
      message: ''
    }

    this.handleShift = this.handleShift.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleShift(event) {
    let shiftAmount = parseInt(event.target.value, 10);
    if ( shiftAmount < -26 ) {
      shiftAmount = 26;
    } else if ( shiftAmount > 26 ) {
      shiftAmount = -26;
    }
    this.setState({
      shift: shiftAmount,
      cipher: EnglishShiftFactory(shiftAmount)
    });
  }

  handleMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const {
      shift,
      message,
      cipher
    } = this.state
    const decoded = message.split('').map(char => {
      try {
        return cipher(char);
      } catch(err) {
        return char;
      }
    }).join('');

    return (
      <div>
        <h2>Shift Cipher Solver</h2>
        <p>
          Any character that is not a capitalized letter will be returned as is.
        </p>
        <p>
          <label>Shift Amount:</label>
          <input
            type='number' 
            value={shift}
            onChange={this.handleShift} />
        </p>
        <p>
          <label>Message:</label>
          <input
            type='text'
            value={message}
            onChange={this.handleMessage} />
        </p>
        <p>
          { decoded }
        </p>
      </div>
    );
  }
}

class VigenereCheat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      reverse: false,
      cipher: EnglishVigenereFactory('', false),
      message: ''
    }

    this.handleKeyword = this.handleKeyword.bind(this);
    this.handleReverse = this.handleReverse.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleKeyword(event) {
    const keyword = event.target.value;
    this.setState({
      keyword,
      cipher: EnglishVigenereFactory(keyword)
    });
  }

  handleReverse(event) {
    this.setState({ reverse: event.target.checked })
  }

  handleMessage(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const {
      keyword,
      message,
      reverse,
      cipher
    } = this.state;
    let rollingIndex = 0;
    const decoded = message.split('').map((char) => {
      const modIndex = rollingIndex % keyword.length;
      try {
        const newChar = cipher(char, modIndex, reverse);
        rollingIndex++;
        return newChar;
      } catch(err) {
        return char;
      }
    }).join('');

    return (
      <div>
        <h2>Vigenère Cipher Solver</h2>
        <p>
          Any character that is not a capitalized letter will be returned as is.
        </p>
        <p>
          <label>Keyword: </label>
          <input
            type='text' 
            value={keyword}
            onChange={this.handleKeyword} />
        </p>
        <p>
          <label>Reverse:</label>
          <input
            type='checkbox'
            checked={reverse}
            onChange={this.handleReverse} />
        </p>
        <p>
          <label>Message:</label>
          <input
            type='text'
            value={message}
            onChange={this.handleMessage} />
        </p>
        <p>
          { decoded }
        </p>
      </div>
    );
  }
}
