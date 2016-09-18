import React from 'react';
import { Match, Link } from 'react-router';

import ShiftRoute from './ShiftRoute';
import VigenereRoute from './VigenereRoute';

export default ({ pathname }) => (
  <div>
    <Match pattern={`${pathname}`} exactly component={ToolsList} />
    <Match pattern={`${pathname}/shift`} component={ShiftRoute} />
    <Match pattern={`${pathname}/vigenere`} component={VigenereRoute} />
  </div>
);

function ToolsList(props) {
  return (
    <div>
      <h1>Tools</h1>
      <p>
        Below are some tools that may assist you in encrypting and decrypting
        messages.
      </p>
      <ul>
        <li>
          <Link to={{pathname: '/tools/shift'}}>Shift Cipher Tools</Link>
        </li>
        <li>
          <Link to={{pathname: '/tools/vigenere'}}>Vigenère Cipher Tools</Link>
        </li>
      </ul>
    </div>
  );
}