import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import {
  CryptoIntro,
  ModularArithmetic,
  SubstitutionCiphers,
  ShiftCipher,
  Vigenere,
  BasicAttacks,
  AffineCipher
} from './index';

export default ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={LessonList} />
    <Route path={`${match.url}/crypto-intro`} component={CryptoIntro} />
    <Route path={`${match.url}/modular-arithmetic`} component={ModularArithmetic} />
    <Route path={`${match.url}/substitution-ciphers`} component={SubstitutionCiphers} />
    <Route path={`${match.url}/shift-ciphers`} component={ShiftCipher} />
    <Route path={`${match.url}/vigenere-cipher`} component={Vigenere} />
    <Route path={`${match.url}/basic-attacks`} component={BasicAttacks} />
    <Route path={`${match.url}/affine-cipher`} component={AffineCipher} />
  </Switch>
);

const LessonList = props => (
  <div>
    <h1>Lessons</h1>
    <ol>
      <li>
        <Link to='/learn/crypto-intro'>Introduction to Cryptography</Link>
      </li>
      <li>
        <Link to='/learn/modular-arithmetic'>Modular Arithmetic</Link>
      </li>
      <li>
        <Link to='/learn/substitution-ciphers'>Substitution Ciphers</Link>
      </li>
      <li>
        <Link to='/learn/shift-ciphers'>Shift Cipher</Link>
      </li>
      <li>
        <Link to='/learn/vigenere-cipher'>Vigenère Cipher</Link>
      </li>
      <li>
        <Link to='/learn/basic-attacks'>Basic Attacks</Link>
      </li>
      <li>
        <Link to='/learn/affine-cipher'>Affine Cipher</Link>
      </li>
    </ol>
  </div>
);
