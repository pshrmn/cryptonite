import React from 'react';

import Lesson from './LessonBase';

const title = 'Introduction to Cryptography';

export default () => (
  <Lesson title={title}>
    <div>
      <p>
        Imagine that you have a message that you want to pass to a friend:
      </p>
      <code>
        MATH IS FUN
      </code>
      <p>
        The information in the message is important and you don't want anyone
        else who sees the message to know what it says. What should you do? You
        should encrypt the message so that only people who know how to decrypt
        it can read it. Encryption is the process of transforming a plain text
        message into an encrypted message. Decryption is the process of
        transforming an encrypted message into a plain text message.
      </p>
      <p>
        You and your friend agree to use the ROT13 cipher to encrypt the message.
        A cipher is a set of steps that must be taken to transform the characters
        in a message. You then encrypt the message and your friend gets the
        encrypted message:
      </p>
      <code>
        ZNGU VF SHA
      </code>
      <p>
        Luckily, she knows that the message was encrypted using ROT13 and that in
        order to decrypt it, she needs to reverse the encryption cipher with a
        decryption cipher. For ROT13 encryption, the decryption cipher is also
        ROT13. Using that cipher, she can decrypt the message and reply:
      </p>
      <code>
        QRSVAVGRYL
      </code>
      <p>
        After you decrypt her message, you see that her response is:
      </p>
      <code>
        DEFINITELY
      </code>
      <p>
        What would happen if someone else saw the messages that you passed? That
        depends on whether or not they know how to decrypt the messages. To
        someone that does not know how to decrypt them, the messages are just
        nonsense. Someone who does know how to decrypt the messages, can
        easily read them.
      </p>
      <p>
        The ROT13 cipher isn't very secure. Even if somebody who intercepts a
        message doesn't know how it was encrypted, it is very easy for them to
        brute force attack the encrypted message to determine the plain text
        message.
      </p>
      <p>
        Thanks to computers, modern ciphers are much more secure. However, we
        will be focusing on older ciphers in the lessons so that the encryption
        and decryption can be done by hand.
      </p>
    </div>
  </Lesson>
);
