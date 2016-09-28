import { EnglishAlphabet } from 'constants/CharacterSets';

/*
 * the ShiftCipherFactory creates a new shift cipher with a known
 * amount of shift (either positive or negative) for a given array of characters
 * It returns a function that takes an input character and returns an output
 * character determined by the shift. The returned function takes an optional
 * boolean argument reverse, which will reverse the direction of the shift.
 */
export default function ShiftCipherFactory(characterSet, shift) {
  const charCount = characterSet.length;
  return function shiftCipher(char, reverse) {
    const start = characterSet.indexOf(char);
    if ( start === -1 ) {
      throw Error(`The character "${char}" could not be found in the character set.`)
    }
    // add the charCount to take negative shifts into account
    const newIndex = (start + (reverse ? -1*shift : shift) + charCount) % charCount;
    return characterSet[newIndex];
  }
}

/*
 * A specialized version of the shiftCipherFactory that hardcodes
 * the character set to be the English alphabet.
 */
export function EnglishShiftFactory(shift) {
  const EnglishChars = EnglishAlphabet.split('');
  return ShiftCipherFactory(EnglishChars, shift);
}
