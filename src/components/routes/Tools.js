import React from 'react';
import { Link } from '@curi/react';

function ToolsList(props) {
  return (
    <div>
      <h1>Tools</h1>
      <p>
        Below are some tools that may assist you in encrypting and decrypting
        messages. What they don't do is encrypt and decrypt messages for you.
      </p>
      <ul>
        <li>
          <Link to='Shift Tools'>Shift Cipher Tools</Link>
        </li>
        <li>
          <Link to='Vigenere Tools'>Vigenère Cipher Tools</Link>
        </li>
      </ul>
    </div>
  );
}

export default ToolsList;
