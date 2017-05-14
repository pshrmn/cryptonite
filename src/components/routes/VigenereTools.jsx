import React from 'react';

import { EnglishVigenereTable } from 'components/tools/VigenereTable';
import { EnglishVigenereKeys } from 'components/tools/VigenereKeys';
import VigenereIndices from 'components/tools/VigenereIndices';

export default function VigenereToolsPage(props) {
  return (
    <div>
      <h1>Vigenère Tools</h1>
      <div>
        <h2>Vigenère Table</h2>
        <p>
          The Vigenère table displays each character in the keyword, the
          position of letters (modulo the length of the keyword) that should
          be encrypted using that letter, and how much shift each character
          represents. When encrypting a message, the shift should be to the
          right. When decrypting a message, the shift should be to the left.
        </p>
        <EnglishVigenereTable />
      </div>
      <div>
        <h2>Vigenère Indices</h2>
        <p>
          The Vigenère indices tool provides the index (modulu the length of the
          keyword) for each character in the message.
        </p>
        <VigenereIndices />
      </div>
      <div>
        <h2>Vigenère Keys</h2>
        <p>
          The Vigenère keys displays a shift key for each letter in the keyword.
        </p>
        <p>
          The letters in the outer ring are for the plain text message and the
          corresponding letters in the inner ring are for the encrypted message.
          This means that when encrypting a message, you find the letters in
          the outer ring and replace them with their match in the inner ring.
          When decrypting a message, you find the letters in the inner ring and
          replace them with their match in the outer ring.
        </p>
        <EnglishVigenereKeys />
      </div>
    </div>
  );
}