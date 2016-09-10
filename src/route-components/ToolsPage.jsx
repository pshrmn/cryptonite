import React from 'react';
import { Link } from 'react-router';

export default function ToolsPage(props) {
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
      </ul>
    </div>
  );
}