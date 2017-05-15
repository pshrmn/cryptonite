import React from 'react';

import 'scss/symbols.scss';

export const locked = (
  <span
    className='symbol locked'
    title='Locked'>
    {String.fromCharCode(55357,56594)}
  </span>
);

export const unlocked = (
  <span
    className='symbol unlocked'
    title='Unlocked'>
    {String.fromCharCode(55357,56595)}
  </span>
);

export const star = (
  <span className='symbol star'>
    {String.fromCharCode(55356, 57119)}
  </span>
);
