import React from 'react';

import Lesson from './LessonBase';

const title = 'Substitution Ciphers';

export default () => (
  <Lesson title={title}>
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
        a message using the substitution cipher, each "A" in the message would be
        substituted with an "X". The decryption cipher would then need to invert
        the encryption. When the encrypted message is decrypted, each "X" would
        be substituted with an "A".
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
      <h2>A Small Example</h2>
      <p>
        Now, let's encrypt a message. We will use the same substitution cipher
        that is listed above:
      </p>
      <div className='message'>
        X R M G P E N W H Y U Z T B O I C F L V A Q J S D K
      </div>
      <p>
        We will encrypt the following message:
      </p>
      <div className='message'>
        GROUND CONTROL TO MAJOR TOM
      </div>
      <p>
        Encrypting is as simple as matching each letter in the original message
        to its substitution in the cipher, which is the letter at the same index.
      </p>
      <div className='message'>
        A=X B=R C=M D=G E=P F=E G=N H=W I=H J=Y K=U L=Z M=T N=B O=O P=I Q=C R=F
        S=L T=V U=A V=Q W=J X=S Y=D Z=K
      </div>
      <p>
        This will leave us with the encrypted message:
      </p>
      <div className='message'>
        NFOABG MOBVFOZ VO TXWOF VOT
      </div>
    </section>
  </Lesson>
);