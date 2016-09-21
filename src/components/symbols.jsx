import React from 'react';

import '../scss/symbols.scss';

export const locked = (
  <span className='locked'>
    {String.fromCharCode(55357,56594)}
  </span>
);

export const unlocked = (
  <span className='unlocked'>
    {String.fromCharCode(55357,56595)}
  </span>
);

export const completed = (
  <span className='completed'>
    {String.fromCharCode(10003)}
  </span>
);

export const star = (
  <span className='star'>
    {String.fromCharCode(55356, 57119)}
  </span>
);
