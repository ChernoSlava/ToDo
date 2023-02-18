/* eslint-disable max-len */
import React, { SVGProps } from 'react';

export const EditIcon: React.FC<SVGProps<SVGSVGElement>> = (
  props,
): JSX.Element => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4.5 17.2071V19C4.5 19.2761 4.72386 19.5 5 19.5H6.79289C6.9255 19.5 7.05268 19.4473 7.14645 19.3536L15.6452 10.8548L13.1452 8.35485L4.64645 16.8536C4.55268 16.9473 4.5 17.0745 4.5 17.2071Z"
        stroke="#000000"
      />
      <path
        d="M15.0897 6.4103L17.5897 8.9103L18.7929 7.70711C19.1834 7.31658 19.1834 6.68342 18.7929 6.2929L17.7071 5.20711C17.3166 4.81658 16.6834 4.81658 16.2929 5.20711L15.0897 6.4103Z"
        stroke="#000000"
      />
    </svg>
  );
};
