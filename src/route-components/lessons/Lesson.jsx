import React from 'react';

import '../../scss/lesson.scss';

export default function Lesson(props) {
  const {
    title,
    children
  } = props;
  return (
    <div className='lesson'>
      <h1>{ title }</h1>
      { children }
    </div>
  );
}