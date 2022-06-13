import React from 'react';
import {IconType} from '../../../icons';

const Bun: IconType = ({height = 160, width = 160, ...props}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 400 225"
      {...props}
    >
      <path
        d="M179.436 76V63.7543C179.436 63.7543 183.723 68.5699 190.111 61.3485C193.598 66.5858 197.3 65.6064 201.222 61.3485C205.505 67.0797 209.572 63.6819 211.242 61.3485C213.784 66.0918 218.358 64.708 218.358 64.708L219.149 75.5189C219.149 75.5189 219.381 70.1369 226.196 72.0487C231.283 64.1928 229.322 52.2281 221.333 45.0067C224.965 41.1107 225.546 36.6527 223.73 31.3431C221.914 26.0335 215.786 20 204.224 20C192.661 20 190.045 28.5669 190.045 33.0292C190.045 37.4915 192.076 39.3309 192.076 39.3309C192.076 39.3309 170 44.2147 170 62.7494C170 70.8905 172.036 72.0231 172.036 72.0231C172.036 72.0231 178.055 69.4173 179.436 76Z"
        fill="#001F5C"
      />
    </svg>
  );
};

export default Bun;
