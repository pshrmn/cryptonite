import ShiftCipherFactory from './shift';
import { EnglishAlphabet } from 'constants/CharacterSets';

export function VigenereFactory(characterSet, keyword) {
  // verify that every character in the keyword exists
  // in the characterSet.
  const charIndices = keyword.split('').map(char => characterSet.indexOf(char));
  if ( !charIndices.every(i => i !== -1) ) {
    throw Error(`Not all characters in the keyword "${keyword} exist in the character set`);
  }

  const ciphers = charIndices.map(i => ShiftCipherFactory(characterSet, i));

  return function Vigenere(char, index, reverse) {
    if ( index < 0 || index >= ciphers.length ) {
      throw Error('Vigenere index is not valid.');
    }
    return ciphers[index](char, reverse);
  }
};

export function EnglishVigenereFactory(keyword) {
  const EnglishChars = EnglishAlphabet.split('');
  return VigenereFactory(EnglishChars, keyword);
}
