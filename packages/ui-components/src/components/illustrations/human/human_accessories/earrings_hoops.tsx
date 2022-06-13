import React from 'react';
import {IconType} from '../../../icons';

const EarringsHoops: IconType = ({height = 160, width = 160, ...props}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 400 225"
      {...props}
    >
      <path
        d="M174.084 88.2178C174.084 85.1594 175.487 82.7441 177.197 81.8448L176.227 80C173.643 81.359 172 84.6249 172 88.2178C172 90.5746 172.699 92.75 173.881 94.3612C175.062 95.9718 176.78 97.0765 178.774 97.0765C181.423 97.0765 183.457 95.2754 183.838 93.7479L182.747 91.7956C181.849 93.8513 180.316 94.9921 178.774 94.9921C177.603 94.9921 176.455 94.347 175.562 93.1286C174.668 91.9108 174.084 90.178 174.084 88.2178Z"
        fill="#3164FA"
      />
      <path
        d="M224.916 88.2178C224.916 85.1594 223.513 82.7441 221.803 81.8448L222.773 80C225.357 81.359 227 84.6249 227 88.2178C227 90.5746 226.301 92.75 225.119 94.3612C223.938 95.9718 222.22 97.0765 220.226 97.0765C217.577 97.0765 215.87 95.2754 215.107 93.7479L216.253 91.7956C217.151 93.8513 218.684 94.9921 220.226 94.9921C221.397 94.9921 222.545 94.347 223.438 93.1286C224.332 91.9108 224.916 90.178 224.916 88.2178Z"
        fill="#3164FA"
      />
    </svg>
  );
};

export default EarringsHoops;
