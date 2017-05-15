import React from 'react';

import ShiftKey from './ShiftKey';
import 'scss/vigenere.scss';

export default class VigenereKeys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
    this.keywordHandler = this.keywordHandler.bind(this);
  }

  keywordHandler(event) {
    this.setState({
      keyword: event.target.value
    })
  }
  
  render() {
    const {
      characters
    } = this.props;
    const charactersArray = characters.split('');
    let {
      keyword
    } = this.state;
    keyword = keyword.toUpperCase();
    return (
      <div>
        <input type='text'
               value={keyword}
               onChange={this.keywordHandler}
               placeholder='Keyword' />
        <div className='shift-keys'>
          {
            keyword.split('').map((char, index) => (
              <div key={index} className='vigenere-char'>
                <p>{index}</p>
                <ShiftKey
                  characters={charactersArray}
                  noControls
                  initialShift={charactersArray.indexOf(char)} />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export const EnglishVigenereKeys = props => (
  <VigenereKeys characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ' />
);
