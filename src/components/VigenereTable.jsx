import React from 'react';

import '../scss/vigenere.scss';

export default function VigenereTable(props) {
  const {
    characters,
    keyword
  } = props;
  const charRows = keyword.split('').map((char, index) => {
    return (
      <tr key={index}>
        <td>{char}</td>
        <td>{characters.indexOf(char) || '???'}</td>
        <td>{index}</td>
      </tr>
    );
  })
  return (
    <table className='vigenere-table'>
      <thead>
        <tr>
          <td>Character</td>
          <td>Shift</td>
          <td>Position</td>
        </tr>
      </thead>
      <tbody>
        { charRows }
      </tbody>
    </table>
  );
}
