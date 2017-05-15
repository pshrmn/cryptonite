import React from 'react';

import Lesson from './LessonBase';

const title = 'Affine Cipher';

export default () => (
  <Lesson title={title}>
    <section>
      <h2>What is instance?</h2>
      <p>
        An affine cipher is a substitution cipher which uses an algebraic
        equation to map characters. Each plaintext character will uniquely map
        to a character in the ciphertext.
      </p>
      <p>
        The affine cipher uses the following equation to encrypt characters:
      </p>
      <code>
        encrypt(x) = (ax + b) mod m
      </code>
      <p>
        <code>x</code> is the character to encrypt, <code>m</code> is the number of
        characters in the character set, and <code>a</code> and <code>b</code> are
        the keys. <code>a</code> and <code>m</code> must be coprime, so for the
        English alphabet character set, <code>a</code> cannot be 13 or an even
        number. If <code>a</code> and <code>m</code> are coprime, then we will
        end up with index values that repeat themselves, which means that two
        characters in the plaintext could map to the same character in the
        ciphertext. This is obviously undesirable, so they must be coprime.
        If <code>a</code> is 1, then the affine cipher is a simple shift
        cipher (by the amount of <code>b</code>).
      </p>
    </section>
    <section>
      <h2>Differences from other substitution ciphers</h2>
      <p>
        With a regular shift cipher, each character in the ciphertext is in
        the same order as the characters in the plaintext. For instance, if you
        know that the letter <code>A</code> in the plaintext is shifted to be
        a <code>P</code> in the ciphertext, then it follows that the
        letter <code>B</code> in the plaintext is shifted to be
        a <code>Q</code> in the ciphertext. This simplicity means that once
        one letter has been solved, all of the letters have been.
      </p>
      <p>
        On the opposite end of the spectrum is a "random" substitution cipher.
        With a "random" substitution cipher, each letter needs to be solved for
        individually. This makes the cipher more difficult to break, but also
        requires the recipient of the encrypted message to have a copy of the
        substitution cipher in order for them to be able to decrypt it.
      </p>
      <p>
        The affine cipher falls in between the two preceding examples. Solving
        for one character will not break an affine cipher, while the only
        information that the recipient needs to know in order to decrypt the
        message are the <code>a</code> and <code>b</code> keys used to encrypt
        the message.
      </p>
      <p>
        While it can still be attacked, the affine cipher offers a slightly
        higher level of security compared to a shift cipher while not requiring
        the encrypter and the decrypter to store a complex encryption key.
      </p>
    </section>
    <section>
      <h2>Decrypting Affine Ciphers</h2>
      <p>
        How does one go about decrypting an affine cipher given the "a" and "b"
        keys? The following equation reverses the encryption equation:
      </p>
      <code>
        decrypt(x) = a<sup>-1</sup>(x - b) mod m
      </code>
    </section>
    <section>
      <h2>An Example</h2>
      <p>
        Let's encrypt the word <code>CRYPTONITE</code> using an affine cipher
        where the keys are <code>a=5</code> and <code>b=11</code>.
      </p>
      <code>
        C=2 R=17 Y=25 P=15 T=19 O=14 N=13 I=8 T=19 E=4
      </code>
      <p>
        For the index of each character in the plaintext, we will multiply it by
        our <code>a</code> value, shift it by our <code>b</code> value, and take
        the modulo by the number of characters in our character set. The number
        output by each value is the index in the character set of the
        encrypted character.
      </p>
      <ul>
        <li>
          <code>C = (2*5 + 11) % 26 = 21 = V</code>
        </li>
        <li>
          <code>R = (17*5 + 11) % 26 = 18 = S</code>
        </li>
        <li>
          <code>Y = (25*5 +11) % 26 = 6 = G</code>
        </li>
        <li>
          <code>P = (15*5 +11) % 26 = 8 = I</code>
        </li>
        <li>
          <code>T = (19*5 +11) % 26 = 2 = C</code>
        </li>
        <li>
          <code>O = (14*5 +11) % 26 = 3 = D</code>
        </li>
        <li>
          <code>N = (13*5 +11) % 26 = 24 = Y</code>
        </li>
        <li>
          <code>I = (8*5 +11) % 26 = 25 = Z</code>
        </li>
        <li>
          <code>T = (19*5 +11) % 26 = 2 = C</code>
        </li>
        <li>
          <code>E = (4*5 +11) % 26 = 5 = F</code>
        </li>
      </ul>
      <p>
        That will leave us with the ciphertext: <code>VSGICDYZCF</code>
      </p>
    </section>
  </Lesson>
);
