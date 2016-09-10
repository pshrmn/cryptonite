import React from 'react';

import { AlphabetShiftKey } from './ShiftKey';

export default function ShiftTools(props) {
  return (
    <div>
      <section>
        <h2>Shift Key</h2>
        <p>
          The shift key is useful for matching characters in a shift cipher. Use the
          left and right triangle buttons to change the amount of shift. A positive
          shift is the amount of shift to the right and a negative shift is the
          amount of shift to the left.
        </p>
        <p>
          The characters in the outer ring are the ones in the input message and
          the characters in the inner ring are the ones that you will use in the
          output message. When encrypting, the input message is the plain text
          and the output message is the encrypted message, vice versa when
          decrypting.
        </p>
        <div>
          <h3>English Alphabet Shift Key</h3>
          <AlphabetShiftKey />
        </div>
      </section>
    </div>
  );
}
