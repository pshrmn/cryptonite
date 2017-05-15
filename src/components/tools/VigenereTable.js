import React from 'react';

import { EnglishAlphabet } from 'constants/CharacterSets';

import 'scss/vigenere.scss';

export default function VigenereTable(props) {
  const {
    characters = [],
    keyword = ''
  } = props;
  const charRows = keyword.split('').map((char, index) => {
    const charIndex = characters.indexOf(char);
    return (
      <tr key={index}>
        <td>{char}</td>
        <td>{index}</td>
        <td>{charIndex !== -1 ? charIndex : '???'}</td>
      </tr>
    );
  })
  return (
    <table className='vigenere-table'>
      <thead>
        <tr>
          <td>Character</td>
          <td>Position</td>
          <td>Shift</td>
        </tr>
      </thead>
      <tbody>
        { charRows }
      </tbody>
    </table>
  );
}

const EnglishChars = EnglishAlphabet.split('');
export class EnglishVigenereTable extends React.Component {
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
      keyword
    } = this.state;
    return (
      <div>
        <input type='text'
               value={keyword}
               onChange={this.keywordHandler}
               placeholder='Keyword' />
        <VigenereTable
          characters={EnglishChars}
          keyword={keyword.toUpperCase()} />
      </div>
    );
  }
}
