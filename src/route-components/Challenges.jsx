import React from 'react';
import { Link } from 'react-router';


export default function Challenges(props) {
  return (
    <div>
      <h1>Challenges</h1>
      <ol>
        <li>
          <Link to={{pathname: `/challenge/1`}}>Challenge 1</Link>
        </li>
      </ol>
    </div>
  );
}