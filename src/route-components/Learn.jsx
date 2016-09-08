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
          <Link to={{pathname: '/learn/shift-cipher'}}>Shift Ciphers</Link>
        </li>
      </ol>
    </div>
  );
}