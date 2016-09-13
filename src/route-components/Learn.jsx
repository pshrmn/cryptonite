import React from 'react';
import { Link } from 'react-router';

export default function Learn(props) {
  return (
    <div>
      <h1>Lessons</h1>
      <ol>
        <li>
          <Link to={{pathname: '/learn/crypto-intro'}}>Introduction to Cryptography</Link>
        </li>
        <li>
          <Link to={{pathname: '/learn/modular-arithmetic'}}>Modular Arithmetic</Link>
        </li>
        <li>
          <Link to={{pathname: '/learn/substitution-ciphers'}}>Substitution Ciphers</Link>
        </li>
        <li>
          <Link to={{pathname: '/learn/shift-ciphers'}}>Shift Ciphers</Link>
        </li>
        <li>
          <Link to={{pathname: '/learn/vigenere-cipher'}}>Vigenère Cipher</Link>
        </li>
      </ol>
    </div>
  );
}
