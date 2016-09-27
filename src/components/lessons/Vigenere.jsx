import React from 'react';

import Lesson from './LessonBase';
import VigenereTable from 'components/tools/VigenereTable';

const title = 'The Vigenère Cipher';

export default () => (
  <Lesson title={title}>
    <div>
      <p>
        The Vigenère cipher is an advanced shift substitution cipher. Instead of
        shifting every character by the same amount, it is shifted based on its
        position in the message.
      </p>
      <p>
        A key is used to create a Vigenère cipher. This key is a series of
        characters, potentially a real world but that is not required, that
        exist in the character set of the message. This means that if we were
        encrypting a message that is in English, the key would be made up of
        letters from the English alphabet.
      </p>
      <p>
        For example, let's encrypt a message using a Vigenère cipher with a key
        of "CIPHER".
      </p>
      
      <div className='message'>
        key = CIPHER
      </div>
      <p>
        For each character in the key, there are two important bits of information:
      </p>
      <ol>
        <li>
          <strong>The character's shift</strong> - The character's position in the
          character set (i.e., alphabetically ordered English alphabet, zero indexed)
          is the amount of shift for that character. A "B" in the key would indicate
          a shift of 1 and an "L" would indicate a shift of 11.
        </li>
        <li>
          <strong>The character's position in the key</strong> - Each character in
          the key is only used to shift the characters in the message that align
          with it. This is determined using modular arithmetic where the modulo
          value is the length of the key.
        </li>
      </ol>
      <p>
        That leaves us with the following information for our key:
      </p>
      <VigenereTable keyword='CIPHER' characters={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')} />
      <p>
        Now we can start to encrypt the following message:
      </p>
      <div className='message'>
        message = CATCH ME IF YOU CAN
      </div>
      <p>
        In order to encrypt (or decrypt) a message, the following steps need to
        be taken for each character.
      </p>
      <ol>
        <li>
          Determine the index of the character in the character set. This is the
          value for the character.
        </li>
        <li>
          Determine the index of the character in the message. Compute index modulo
          key length to get the key index.
        </li>
        <li>
          Add the shift amount for the character in the key at the key index to
          the value for the character, then modulo that value by the length of
          the character set to ensure the value is valid.
        </li>
        <li>
          Take the character in the character set at that computed index and
          substitute it with the original character.
        </li>
      </ol>
      <p>
        For example, lets start to encrypt the message. The first character in
        the message is "C", which has a value of 2. The first character's index
        is 0, so we will use the 0th character in the key. The 0th character in
        the key has a shift of 2, so we add that to the character's value, modulo
        that value by the length of the character set (26) to get the number 4.
        The character at index 4 in the character set is "E", so the first
        character in our encrypted message is "E".
      </p>
      <div className='message'>
        encrypted = E
      </div>
      <p>
        The second character in the message is "A", so the value is 0. The character's
        index is 1, so we use the shift of the index=1 character in the key, which
        is 8. We add those two values, modulo them by 26, and get the value 8. The
        second character in our encrypted message is the character in the character
        set whose index is 8, which is "I". We continue doing this with the characters
        "T", "C", "H", and "M", giving us the encrypted characters "I", "J", "L",
        and "D".
      </p>
      <div className='message'>
        encrypted = EIIJL D
      </div>
      <p>
        Now we are at the seventh character in the message, "E". "E" has a value
        of 4 and an index of 6, which is outside of the index values for our key.
        Remember though, that to compute the key index we take the character index
        modulo the length of the key. For this, we compute 6 modulo 6, which is
        0. So the character should be encrypted using the zero index character in
        our key, "C", which shifts our character's value (4) by 2 to get the value
        6. The index=6 character is "G"
      </p>
      <div className='message'>
        encrypted = EIIJL DG
      </div>
      <p>
        This process continues for every letter in the original message.
      </p>
      <p>
        In order to decrypt a Vigenère cipher encrypted message, you just need
        to subtract the shift value for each character instead of adding it. For
        example, the first character in the encrypted message is "E", which has
        a value of 4. This is the 0th character in our message, so we will use
        the 0th character in the key, which is "C" and has a shift of 2. Because
        we are decrypting, we subtract 2 from our value of 4 to get the value 2.
        The character with index=2 is "C", so that is the first letter in the
        decrypted message.
      </p>
    </div>
  </Lesson>
);

