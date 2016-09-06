import React from 'react';

export const PInput = function(props) {
  const {
    name,
    value = '',
    type = 'text',
    handler,
    id = `input-${Math.floor(Math.random()*10000)}`
  } = props;
  return (
    <p>
      <label htmlFor={id}>{name}</label>
      <input type={type}
             id={id}
             value={value}
             onChange={handler} />
    </p>
  );
}
