import React from 'react';

import { AlphabetShiftKey } from '../../components/ShiftKey';

export default function ShiftCipher(props) {
  return (
    <div>
      <h1>Shift Cipher</h1>
      <p>
        The shift cipher is a simple substitution cipher. Julius Caesar, the
        Roman Emperor, used a shift cipher to encrypt messages, so they are also
        referred to as Caesar ciphers.
      </p>
      <section>
        <h2>
          What is a substitution cipher?
        </h2>
        <p>
          In order to create a substitution cipher we need to start with a set of
          characters. We will use the English alphabet, which consists of 26 characters.
        </p>
        <div className='message'>
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </div>
        <p>
          As the name implies, a substitution cipher substitutes each character
          in a message with a different character. For example, the character "A"
          might be substituted by the character "X". Then, when you are encrypting
          a message using the cipher, each "A" in the message would be substituted
          with an "X". The decryption cipher would then need to invert the encryption.
          When the encrypted message is decrypted, and each "X" would be substituted
          with an "A".
        </p>
        <div className='message'>
          X R M G P E N W H Y U Z T B O I C F L V A Q J S D K
        </div>
        <p>
          The important thing is that the cipher substitutes each letter uniquely.
          If both "A" and "E" were substituted with an "X", when you try to
          decrypt the message, you wouldn't know whether to substitute "X"s with
          an "A" or an "E".
        </p>
      </section>
      <section>
        <h2>A Bit of Math</h2>
        <p>
          Before we go further, it is important to get a basic understanding of
          modular arithmetic. If you remember when you first learned division,
          instead of figuring out decimal places, you left a remainder. For
          example, 25 divided by 4 is 6.25, but is also 6 remainder 1. Modular
          arithmetic is essentially getting the remainder value from division.
          Therefore, 25 modulo 4 = 1.
        </p>
        <p>
          Now, lets take a look at a series of numbers modulo 4. Note that it is
          common to express modulo using the word "mod" or the symbol "%". I.e.,
          24 mod 4 = 0 and 25 % 4 = 1.
        </p>
        <ul>
          <li>24 ÷ 4 = 6 remainder 0, so 24 mod 4 = 0</li>
          <li>25 ÷ 4 = 6 remainder 1, so 25 mod 4 = 1</li>
          <li>26 ÷ 4 = 6 remainder 2, so 26 mod 4 = 2</li>
          <li>27 ÷ 4 = 6 remainder 3, so 27 mod 4 = 3</li>
          <li>28 ÷ 4 = 7 remainder 0, so 28 mod 4 = 0</li>
          <li>29 ÷ 4 = 7 remainder 1, so 29 mod 4 = 1</li>
        </ul>
        <p>
          Looking at the modulo values, you can see that they have the cycle 0,
          1, 2, 3, 0, 1, ... that contains the range 0 through our modulo number
          minus one (3 in this case).
        </p>
        <p>
          One way to compute the modulo value is to subtract the modulo number from
          our initial value, and continue doing this with the result until the result
          is less than the modulo number (and greater than or equal to 0).
        </p>
        <div className='message'>
          25 mod 4 = 25 - 4 = 21 - 4 = 17 - 4 = 13 - 4 = 9 - 4 = 5 - 4 = 1
        </div>
        <p>
          For negative numbers, the reverse applies. We would keep adding the modulo
          number until we are greater than or equal to 0 (and less than the modulo
          number).
        </p>
        <div className='message'>
          -25 mod 4 = -25 + 4 = -21 + 4 = -17 + 4 = -13 + 4 = -9 + 4 = -5 + 4 = -1 + 4 = 3
        </div>
      </section>
      <section>
        <h2>Shift-y Business</h2>
        <p>
          One approach to a substitution cipher would be to randomize the ordering
          of the letters. The problem with this is that the person who needs to
          decrypt the message would also have to know this randomized ordering. A
          simpler solution is to use a shift cipher.
        </p>
        <p>
          We can assign each character in our set an index number based on its
          position in the set. Here the index of each character is based on
          alphabetical order. "A" is the first character, so we will give it
          the index of 0. We start at 0 instead of 1 because we will be using
          modular arithmetic. "B" will be index 1, so on and so forth until we
          get to the character "Z" which will be index 25.
        </p>
        <div className='message'>
          A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9 K=10 L=11 M=12 N=13 O=14 P=15
          Q=16 R=17 S=18 T=19 U=20 V=21 W=22 X=23 Y=24 Z=25
        </div>
        <p>
          A shift cipher provides a controlled way to encrypt and decrypt messages
          by substituting a character with the one a set distance from it. For
          example, if we were encrypting a message using a shift cipher of 3, for
          each character in the plain text message, we would add 3 to its index and
          substitute it with the character at the computed index.
        </p>
        <div className='message'>
          computed index = index + 3
        </div>
        <p>
          "A" has an index
          of 0, so we add 3 to it to get the computed index of 3. We would then
          substitute the character at index 3, "D" for the "A".
        </p>
        <p>
          There is one issue though, which is that some characters get shifted to
          numbers that are outside of our number of characters, so they have no
          character to substitute for them.
        </p>
        <div className='message'>
          A=3 B=4 C=5 D=6 E=7 F=8 G=9 H=10 I=11 J=12 K=13 L=14 M=15 N=16 O=17 P=18
          Q=19 R=20 S=21 T=22 U=23 V=24 W=25 X=26 Y=27 Z=28
        </div>
        <p>
          This is where modular arithmetic comes in. After adding the shift value
          to the index, we need to take the modulo of that sum using the total
          number of characters. In our case, we have 26 characters, so our cipher 
          will use modulo 26.
        </p>
        <div className='message'>
          computed index = (index + 3) mod 26
        </div>
        <p>
          That will ensure that all of our characters shift to an index that aligns
          with a character.
        </p>
        <div className='message'>
          A=3 B=4 C=5 D=6 E=7 F=8 G=9 H=10 I=11 J=12 K=13 L=14 M=15 N=16 O=17 P=18
          Q=19 R=20 S=21 T=22 U=23 V=24 W=25 X=0 Y=1 Z=2
        </div>
        <p>
          Below is a tool to help quickly determine the shifted letters for the
          English alphabet. The "+1" and "-1" buttons can be used to change the
          amount of shifting. The letters in the outer ring are for the original
          letters in the message you have, and the letters in the inner ring are
          the ones that you should use to substitute them with.
        </p>
        <AlphabetShiftKey />
        <p>
          Remember that if a message was encrypted using a shift of 7, then in
          order to decrypt it, you need to shift the reverse way, which is -7.
        </p>
      </section>
      <section>
        <h2>Got Your Message, I'll Decrypt It to Reverse It</h2>
        <p>
          In order to decrypt a shift cipher, the characters have to be shifted
          in the opposite direction. Above our cipher added 3 to the index value
          of each character in order to encrypt the message. We need to reverse
          that in order to decrypt the message, so our cipher should subtract 3
          from each character's index to get its original index.
        </p>
        <div className='message'>
          original index = (index - 3) mod 26
        </div>
        <p>
          That will give us back our original alphabetical ordered indices to use
          for decrypting the encrypted message.
        </p>
        <div className='message'>
          A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9 K=10 L=11 M=12 N=13 O=14 P=15
          Q=16 R=17 S=18 T=19 U=20 V=21 W=22 X=23 Y=24 Z=25
        </div>
        <p>
          Another way to look at the reverse cipher is that we need to return the
          character to its original index, and since we have 26 characters, we need
          to add a number to each index so that the encryption shift value and the
          decryption shift value sum to 26. For the encryption shift cipher of 3,
          this means that we need to add 23 to each encrypted character's index.
        </p>
        <div className='message'>
          original index = (index - 3) mod 26 = (index + 23) mod 26
        </div>
        <p>
          One cipher that is common for demonstrations is ROT13, which is a shift
          cipher of 13. The reason that ROT13 is interesting is that because the
          English alphabet contains 26 letters, the encryption and decryption
          ciphers are the same.
        </p>
      </section>
      <section>
        <h2>Actually Encrypting and Decrypting</h2>
        <p>
          Finally, we should encrypt and decrypt an actual message. One thing to
          note is that so far we have talked about upper and lower case letters
          and haven't included punctuation. Typically, all letters would be treated
          as being the same case and punctuation would be omitted. This is partially
          done to be convenient and also partly to avoid leaking information.
        </p>
        <p>
          The message that we will be encrypting is:
        </p>
        <div className='message'>
          The bell rings at two.
        </div>
        <p>
          Ignoring punctuation and treating all letters as the same case, we can
          convert this message to:
        </p>
        <div className='message'>
          THE BELL RINGS AT TWO.
        </div>
        <p>
          Now, we need to determine how much our cipher should shift. Seven is a
          popular "random" number choice, so we'll go with that. So, given the
          input indices:
        </p>
        <div className='message'>
          A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9 K=10 L=11 M=12 N=13 O=14 P=15
          Q=16 R=17 S=18 T=19 U=20 V=21 W=22 X=23 Y=24 Z=25
        </div>
        <p>
          We will substitute each letter with the letter that has an index seven
          index values higher (modulo 26).
        </p>
        <div className='message'>
          A=7 B=8 C=9 D=10 E=11 F=12 G=13 H=14 I=15 J=16 K=17 L=18 M=19 N=20
          O=21 P=22 Q=23 R=24 S=25 T=0 U=1 V=2 W=3 X=4 Y=5 Z=6
        </div>
        <p>
          Now, we need to determine the index of each character in the message
          that we are encrypting.
        </p>
        <div className='message'>
          T=0 H=14 E=11 B=8 E=11 L=18 L=18 R=24 I=15 N=20 G=13 S=25 A=7 T=0 T=0
          W=3 O=21
        </div>
        <p>
          Now, we need to lookup the index value for each character and substitute
          the character at the index.
        </p>
        <div className='message'>
          0=A 14=O 11=L 8=I 11=L 18=S 18=S 24=Y 15=P 20=U 13=N 25=Z 7=H 0=A 0=A
          3=D 21=V
        </div>
        <p>
          That leaves us with our encrypted message:
        </p>
        <div className='message'>
          AOL ILSS YPUNZ HA ADV
        </div>
        <p>
          Now, if we are the recipient of the message and we need to decrypt the
          message to read it. First we should determine the index of each
          character.
        </p>
        <div className='message'>
          A=0 O=14 L=11 I=8 L=11 S=18 S=18 Y=24 P=15 U=20 N=13 Z=25 H=7 A=0 A=0
          D=3 V=21
        </div>
        <p>
          We know that the plain text message was encrypted using a shift cipher
          of 7, we know that we need to subtract 7 from the index of each
          character to get the original index values (using modulo 26).
        </p>
        <div className='message'>
          A=19 O=7 L=4 I=1 L=4 S=11 S=11 Y=17 P=8 U=13 N=6 Z=18 H=0 A=19 A=19
          D=22 V=14
        </div>
        <p>
          Then, we just need to map the computed original indices to the original
          index values to get the correct letters.
        </p>
        <div className='message'>
          19=T 7=H 4=E 1=B 4=E 11=L 11=L 17=R 8=I 13=N 6=G 18=S 0=A 19=T 19=T
          22=W 14=0
        </div>
        <p>
          Which leaves us with our original message:
        </p>
        <div className='message'>
          THE BELL RINGS AT TWO
        </div>
      </section>
    </div>
  );
}