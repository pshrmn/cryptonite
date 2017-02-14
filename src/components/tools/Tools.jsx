import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import ShiftRoute from './ShiftRoute';
import VigenereRoute from './VigenereRoute';

export default ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={ToolsList} />
    <Route path={`${match.url}/shift`} component={ShiftRoute} />
    <Route path={`${match.url}/vigenere`} component={VigenereRoute} />
  </Switch>
);

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
          <Link to='/tools/shift'>Shift Cipher Tools</Link>
        </li>
        <li>
          <Link to='/tools/vigenere'>Vigenère Cipher Tools</Link>
        </li>
      </ul>
    </div>
  );
}