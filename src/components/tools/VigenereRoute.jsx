import React from 'react';

import { EnglishVigenereTable } from './VigenereTable';

export default function VigenereToolsPage(props) {
  return (
    <div>
      <h1>Vigenere Tools</h1>
      <div>
        <h2>Vigenere Table</h2>
        <EnglishVigenereTable />
      </div>
    </div>
  );
}