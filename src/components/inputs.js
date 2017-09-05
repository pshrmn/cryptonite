import React from 'react';

import 'scss/inputs.scss';

export const InputRow = function(props) {
  const {
    name,
    value = '',
    type = 'text',
    handler,
    placeholder = '',
    id = `input-${Math.floor(Math.random()*10000)}`,
    errors,
    inputName = ''
  } = props;
  return (
    <div className='input-row'>
      <div>
        <Errors errors={errors} />
      </div>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handler}
        name={inputName}
      />
    </div>
  );
}

export const Errors = function(props) {
  const {
    errors
  } = props;
  if ( !errors || !errors.length ) {
    return null;
  }
  return (
    <ul className='errors'>
      { errors.map((e,i) => <li key={i}>{e}</li>)}
    </ul>
  );
}
