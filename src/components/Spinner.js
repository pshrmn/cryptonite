import React from 'react';

const Spinner = () => (
  <svg
    width='32px'
    height='32px'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    className="uil-ripple">
    <rect
      x="0"
      y="0"
      width="100"
      height="100"
      fill="none"
      className="bk" />
    <g>
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        begin="0s"
        keyTimes="0;0.33;1"
        values="1;1;0" />
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#d6b52c"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round">
        <animate
          attributeName="r"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
          keyTimes="0;0.33;1"
          values="0;22;44" />
      </circle>
    </g>
    <g>
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        begin="1s"
        keyTimes="0;0.33;1"
        values="1;1;0" />
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#3863a7"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round">
        <animate
          attributeName="r"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
          keyTimes="0;0.33;1"
          values="0;22;44" />
      </circle>
    </g>
  </svg>
);

export default Spinner;
