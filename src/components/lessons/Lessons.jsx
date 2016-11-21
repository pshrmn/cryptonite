import React from 'react';
import { Match, Link } from 'react-router';

import {
  CryptoIntro,
  ModularArithmetic,
  SubstitutionCiphers,
  ShiftCipher,
  Vigenere,
  BasicAttacks,
  AffineCipher
} from './index';

export default ({pathname}) => (
  <div>
    <Match pattern={`${pathname}`} exactly component={LessonList} />
    <Match pattern={`${pathname}/crypto-intro`} component={CryptoIntro} />
    <Match pattern={`${pathname}/modular-arithmetic`} component={ModularArithmetic} />
    <Match pattern={`${pathname}/substitution-ciphers`} component={SubstitutionCiphers} />
    <Match pattern={`${pathname}/shift-ciphers`} component={ShiftCipher} />
    <Match pattern={`${pathname}/vigenere-cipher`} component={Vigenere} />
    <Match pattern={`${pathname}/basic-attacks`} component={BasicAttacks} />
    <Match pattern={`${pathname}/affine-cipher`} component={AffineCipher} />
  </div>
);

const LessonList = props => (
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
        <Link to={{pathname: '/learn/shift-ciphers'}}>Shift Cipher</Link>
      </li>
      <li>
        <Link to={{pathname: '/learn/vigenere-cipher'}}>Vigenère Cipher</Link>
      </li>
      <li>
        <Link to={{pathname: '/learn/basic-attacks'}}>Basic Attacks</Link>
      </li>
      <li>
        <Link to={{pathname: '/learn/affine-cipher'}}>Affine Cipher</Link>
      </li>
    </ol>
  </div>
);
