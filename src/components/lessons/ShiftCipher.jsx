import React from 'react';

import Lesson from './LessonBase';
import { AlphabetShiftKey } from 'components/tools/ShiftKey';

const title = 'Shift Ciphers';

export default () => (
  <Lesson title={title}>
    <div>
      <p>
        The shift cipher is a simple substitution cipher. Julius Caesar, the
        Roman Emperor, used a shift cipher to encrypt messages, so they are also
        referred to as Caesar ciphers.
      </p>
      <section>
        <h2>Why?</h2>
        <p>
          One approach to creating a substitution cipher would be to randomize
          the ordering of the letters. This can be quite difficult to decrypt
          without access to the cipher because it provides n! (where n is the
          number of characters in the character set) possible ciphers. This is
          great security if you know the cipher, but keeping the cipher secret
          is key to preventing other people from decrypting your messages, which
          means that you may not want to have it written down. This would require
          memorizing the cipher, which would make this system more prone to errors.
        </p>
        <p>
          A simpler solution may be to use a shift cipher. This only has n-1 possible
          ciphers (n if you include a shift of 0), so it is less secure, but also
          easier for the decrypter to remember how to decrypt the message.
        </p>
      </section>
      <section>
        <h2>How?</h2>
        <p>
          We start off by assigning each character in our set an index number
          based on its position in the set. Here the index of each character is
          based on alphabetical order. "A" is the first character, so we will
          give it the index of 0. We start at 0 instead of 1 because we will be
          using modular arithmetic. "B" will be index 1, so on and so forth until
          we get to the character "Z" which will be index 25.
        </p>
        <code>
          A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9 K=10 L=11 M=12 N=13 O=14 P=15
          Q=16 R=17 S=18 T=19 U=20 V=21 W=22 X=23 Y=24 Z=25
        </code>
        <p>
          When encrypting (and decrypting) using a shift cipher, the amount of
          shift is added (or subtracted) from the character's index value. The
          character at that index value is then substituted for the original letter.
        </p>
        <p>
          A shift cipher requires two bits of information, a direction and an
          amount. The direction is either right or left, where right indicates
          that you should add the shift amount and left indicates that you should
          substract it.
        </p>
        <code>
          left shift of 2 = index - 2
        </code>
        <code>
          right shift of 7 = index + 7
        </code>
        <p>
          A left shift of x can be cancelled out by a right shift of x and vice
          versa. If a message is encrypted with a right shift of 11, it will be
          decrypted using a left shift of 11.
        </p>
        <code>
          index = (((index + 11) mod 26) - 11) mod 26
        </code>
      </section>
      <section>
        <h2>Making Sure to Modulo</h2>
        <p>
          You may have noticed an issue with the left and right shift equations
          as they are listed above. The problem is that they can result in values
          that are outside of the indices of our characters. A negative number or
          a number that is larger than the largest index cannot be mapped to a
          character.
        </p>
        <p>
          For a right shift of 3, we should end up with the mapped values:
        </p>
        <code>
          A=3 B=4 C=5 D=6 E=7 F=8 G=9 H=10 I=11 J=12 K=13 L=14 M=15 N=16 O=17 P=18
          Q=19 R=20 S=21 T=22 U=23 V=24 W=25 X=26 Y=27 Z=28
        </code>
        <p>
          This is where modular arithmetic comes in. Simply by using the modulo
          of the number of characters in our character set, we can ensure that
          each character will be mapped to a valid index.
        </p>
        <code>
          left shift of 2 = (index - 2) mod 26
        </code>
        <code>
          right shift of 7 = (index + 7) mod 26
        </code>
        <p>
          Using modular arithmetic, the values that were greater than the number
          of characters have cycled back to legitimate values.
        </p>
        <code>
          A=3 B=4 C=5 D=6 E=7 F=8 G=9 H=10 I=11 J=12 K=13 L=14 M=15 N=16 O=17 P=18
          Q=19 R=20 S=21 T=22 U=23 V=24 W=25 X=0 Y=1 Z=2
        </code>
      </section>
      <section>
        <h2>A Bit of Help</h2>
        <p>
          Below is a tool to help quickly determine the shifted letters for the
          English alphabet. The left and right triangle buttons can be used to
          change the amount of shifting. The letters in the outer ring are for
          the original letters in the message you have, and the letters in the
          inner ring are the ones that you should use to substitute the original
          letters with.
        </p>
        <AlphabetShiftKey />
        <p>
          Remember that if a message was encrypted using a right shift of 7 (adding
          7), then in order to decrypt it, you need to shift the reverse way,
          which is a left shift of 7 (subtracting 7).
        </p>
      </section>
      <section>
        <h2>A Real Message</h2>
        <p>
          Finally, we should encrypt and decrypt an actual message. One thing to
          note is that so far we have talked about upper and lower case letters
          and haven't included punctuation. Typically, all letters would be treated
          as being the same case and punctuation would be omitted. This is done to
          avoid leaking information to someone attempting to decrypt the message
          without knowledge of the key.
        </p>
        <p>
          The message that we will be encrypting is:
        </p>
        <code>
          The bell rings at two.
        </code>
        <p>
          Ignoring punctuation and treating all letters as the same case, we can
          convert this message to:
        </p>
        <code>
          THE BELL RINGS AT TWO
        </code>
        <p>
          Now, we need to determine how much our cipher should shift. Seven is a
          popular "random" number choice, so we'll go with a right shift of 7.
        </p>
        <code>
          substitute index = (index + 7) mod 26
        </code>
        <p>
          So, given the input indices:
        </p>
        <code>
          A=0 B=1 C=2 D=3 E=4 F=5 G=6 H=7 I=8 J=9 K=10 L=11 M=12 N=13 O=14 P=15
          Q=16 R=17 S=18 T=19 U=20 V=21 W=22 X=23 Y=24 Z=25
        </code>
        <p>
          We will substitute each letter with the letter that has an index seven
          index values higher (modulo 26).
        </p>
        <code>
          A=7 B=8 C=9 D=10 E=11 F=12 G=13 H=14 I=15 J=16 K=17 L=18 M=19 N=20
          O=21 P=22 Q=23 R=24 S=25 T=0 U=1 V=2 W=3 X=4 Y=5 Z=6
        </code>
        <p>
          Now, we need to determine the index of each character in the message
          that we are encrypting.
        </p>
        <code>
          T=0 H=14 E=11 B=8 E=11 L=18 L=18 R=24 I=15 N=20 G=13 S=25 A=7 T=0 T=0
          W=3 O=21
        </code>
        <p>
          Next, we need to lookup the index value for each character and substitute
          the character at the index.
        </p>
        <code>
          0=A 14=O 11=L 8=I 11=L 18=S 18=S 24=Y 15=P 20=U 13=N 25=Z 7=H 0=A 0=A
          3=D 21=V
        </code>
        <p>
          That leaves us with our encrypted message:
        </p>
        <code>
          AOL ILSS YPUNZ HA ADV
        </code>
        <p>
          If we are the recipient of the message, we need to decrypt the message
          to read it. First, we should determine the index of each character.
        </p>
        <code>
          A=0 O=14 L=11 I=8 L=11 S=18 S=18 Y=24 P=15 U=20 N=13 Z=25 H=7 A=0 A=0
          D=3 V=21
        </code>
        <p>
          We know that the plain text message was encrypted using a right shift
          of 7, so to decrypt it we need to do a left shift of 7.
        </p>
        <code>
          original index = (substitute index - 7) mod 26
        </code>
        <p>
          This cipher is applied to each character in the encrypted message to
          determine the original indices.
        </p>
        <code>
          A=19 O=7 L=4 I=1 L=4 S=11 S=11 Y=17 P=8 U=13 N=6 Z=18 H=0 A=19 A=19
          D=22 V=14
        </code>
        <p>
          Then, we just need to map the original indices to the original index
          values to get the correct letters.
        </p>
        <code>
          19=T 7=H 4=E 1=B 4=E 11=L 11=L 17=R 8=I 13=N 6=G 18=S 0=A 19=T 19=T
          22=W 14=0
        </code>
        <p>
          Which leaves us with our original message:
        </p>
        <code>
          THE BELL RINGS AT TWO
        </code>
      </section>
    </div>
  </Lesson>
);
