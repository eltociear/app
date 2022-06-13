import React from 'react';
import {IconType} from '../../../icons';

const EarringsRhombus: IconType = ({height = 160, width = 160, ...props}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 400 225"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M252.188 45.0336L254.564 46.4984L254.962 46.6891C253.782 47.4818 251.902 49.4215 250.707 51.514C249.516 53.5997 248.829 56.1858 249.598 59.0549C250.564 62.6616 253 64.9452 256.029 66.117C259.071 67.2936 262.712 67.3465 266.029 66.4576C269.502 65.5271 271.874 63.8658 273.293 62.4598C273.199 59.8857 274.955 58.6653 275.993 58.3636C276.198 58.0592 276.49 57.5247 276.753 56.8018C277.108 55.8236 277.395 54.5396 277.34 53.0919C277.285 51.6551 276.83 50.259 276.236 49.0996C275.746 48.1414 275.173 47.3688 274.68 46.8798L274.665 46.8756L274.666 46.8838L274.661 46.8796L273.971 46.7153C273.971 46.7153 273.795 45.9648 273.488 45.2464C263.865 42.0295 255.278 43.7641 252.188 45.0336ZM269.056 48.8694C269.204 48.7322 269.715 48.2348 270.171 47.3617C271.508 47.1967 272.89 47.2863 272.89 47.2863C270.15 46.4229 266.715 46.399 263.176 47.3717C263.176 47.3717 265.074 49.0409 269.056 48.8694Z"
        fill="#3164FA"
      />
      <path
        d="M243.323 68.9898C240.975 60.2263 245.183 51.3313 252.807 47.5514C251.843 48.4937 250.717 49.8204 249.979 51.0984C248.708 53.3237 247.949 56.1376 248.788 59.2718C249.833 63.1693 252.481 65.6431 255.727 66.8987C258.96 68.1496 262.786 68.1942 266.246 67.2672C269.528 66.3877 271.897 64.8739 273.447 63.4683C274.718 68.0605 281.244 68.5686 285.92 66.0463C284.056 74.1092 278.289 81.3077 269.662 83.6192C258.11 86.7146 246.292 80.0693 243.323 68.9898Z"
        fill="#3164FA"
      />
      <path
        d="M276.982 48.7176C276.737 48.2381 276.468 47.7945 276.193 47.3997C278.792 48.4381 281.071 50.1952 281.755 53.3108C282.741 57.7984 280.53 60.2603 278.893 61.0104C279.346 59.409 278.427 58.7206 278.075 58.5034C277.903 58.3977 277.564 58.2334 277.051 58.2115C277.217 57.8923 277.386 57.5137 277.54 57.0882C277.926 56.0283 278.238 54.6355 278.177 53.0598C278.117 51.4734 277.617 49.9579 276.982 48.7176Z"
        fill="#3164FA"
      />
      <path
        d="M288.572 175.863L292.37 196.92C292.702 198.099 292.756 199.338 292.529 200.541C292.302 201.745 291.8 202.879 291.062 203.855C290.323 204.832 289.369 205.624 288.274 206.169C287.178 206.715 285.971 206.999 284.748 207H161.202C158.993 207 157.202 205.21 157.202 203.001V159.249C157.202 159.249 145.178 169.685 129.578 181.063C113.978 192.441 100.489 194.719 86.5098 186.351C72.5305 177.984 78.3499 161.39 85.7055 148.406C91.1757 138.75 98.5271 126.916 101.936 121.484C102.763 120.167 104.776 120.258 105.873 121.36C111.047 126.556 120.772 126.191 125.921 125.555C127.446 125.366 128.756 126.828 128.304 128.297L126.481 134.219L155.718 115.351C160.118 112.511 165.243 111.001 170.478 111H187.33V118.223C187.33 118.427 187.364 118.631 187.504 118.781C188.086 119.406 190.534 120.988 200.388 121C212.041 120.985 212 118.491 212 118.491V109.989H228.299C232.452 109.972 236.566 110.777 240.408 112.355C244.249 113.934 247.741 116.255 250.684 119.187C253.627 122.118 255.963 125.603 257.557 129.439C259.152 133.276 259.975 137.39 259.978 141.546V182.688L288.572 175.863Z"
        fill="#3164FA"
      />
      <path
        d="M298 31.3835C296.945 28.4771 293.796 26.9089 290.841 27.8185L221.265 49.2358C220.842 49.3658 220.606 49.8135 220.736 50.2358C220.866 50.658 221.313 50.895 221.735 50.765L291.312 29.3477C293.452 28.689 295.732 29.8246 296.496 31.9293L312.523 76.1002C312.618 76.3619 312.685 76.6267 312.727 76.8913L237.277 98.7317C236.853 98.8546 236.609 99.2982 236.731 99.7226C236.854 100.147 237.298 100.391 237.722 100.269L312.642 78.5813C312.285 79.961 311.234 81.1302 309.756 81.5634L239.166 102.243C237.012 102.874 234.743 101.7 234.013 99.5776L229.71 87.0577C229.567 86.6399 229.112 86.4175 228.694 86.5611C228.276 86.7047 228.054 87.1599 228.197 87.5777L232.5 100.098C233.507 103.029 236.641 104.65 239.616 103.779L270.409 94.7575L270.412 94.7689L274.23 108.218C274.351 108.643 274.793 108.89 275.218 108.77C275.643 108.649 275.89 108.206 275.769 107.781L272.17 95.1021L279.289 93.086L283.978 109.644C283.989 109.684 284.003 109.721 284.02 109.758C282.839 109.814 281.759 109.945 280.797 110.114C279.224 110.39 277.964 110.766 277.093 111.076C276.657 111.23 276.317 111.369 276.084 111.47C275.967 111.521 275.877 111.562 275.814 111.591C275.782 111.606 275.758 111.618 275.74 111.627L275.72 111.637L275.711 111.641C275.71 111.641 275.709 111.642 276.07 112.356L275.709 111.642C275.315 111.841 275.157 112.322 275.356 112.717C275.555 113.111 276.037 113.269 276.431 113.07L276.442 113.065L276.46 113.056L276.495 113.039C276.543 113.017 276.619 112.982 276.72 112.938C276.923 112.85 277.229 112.725 277.628 112.583C278.428 112.3 279.6 111.949 281.074 111.69C284.019 111.173 288.159 111.026 292.921 112.519C293.343 112.651 293.792 112.417 293.924 111.995C294.056 111.574 293.822 111.125 293.4 110.993C290.514 110.088 287.838 109.75 285.488 109.729C285.554 109.569 285.568 109.387 285.518 109.208L280.611 91.8803C280.606 91.8652 280.602 91.8502 280.597 91.8356C280.59 91.8164 280.583 91.7977 280.575 91.7793L310.205 83.0988C313.418 82.1578 315.169 78.7008 314.027 75.5545L298 31.3835Z"
        fill="#001F5C"
      />
      <path
        d="M276.508 119.468L276.835 120.198C276.508 119.468 276.51 119.468 276.51 119.467L276.519 119.464L276.539 119.455C276.556 119.448 276.579 119.438 276.609 119.425C276.67 119.4 276.756 119.366 276.868 119.323C277.091 119.239 277.416 119.125 277.834 118.999C278.669 118.747 279.879 118.448 281.399 118.249C284.441 117.851 288.727 117.853 293.741 119.435C294.162 119.568 294.396 120.018 294.263 120.439C294.13 120.86 293.681 121.094 293.259 120.961C288.501 119.46 284.454 119.462 281.607 119.835C280.182 120.022 279.058 120.301 278.296 120.531C277.915 120.646 277.624 120.748 277.433 120.82L277.376 120.842L277.322 120.863C277.28 120.88 277.246 120.893 277.22 120.904C277.197 120.913 277.181 120.92 277.171 120.925L277.161 120.929C276.758 121.109 276.285 120.928 276.105 120.525C275.924 120.122 276.105 119.649 276.508 119.468Z"
        fill="#001F5C"
      />
      <path
        d="M277.226 127.497L277.228 127.497L277.23 127.496L277.237 127.493L277.257 127.484L277.301 127.464L277.326 127.454C277.385 127.429 277.469 127.394 277.578 127.351C277.796 127.267 278.112 127.152 278.52 127.026C279.336 126.773 280.519 126.473 282.012 126.274C285.001 125.875 289.23 125.879 294.241 127.461C294.662 127.594 294.896 128.043 294.763 128.465C294.63 128.886 294.181 129.12 293.759 128.987C289.002 127.484 285.012 127.488 282.224 127.86C280.829 128.046 279.734 128.325 278.994 128.554C278.624 128.669 278.343 128.771 278.158 128.843L278.099 128.866L278.065 128.879L278.01 128.902C277.988 128.911 277.969 128.919 277.953 128.926C277.931 128.935 277.916 128.942 277.907 128.946L277.898 128.95C277.497 129.135 277.021 128.96 276.836 128.559C276.651 128.158 276.825 127.683 277.226 127.497Z"
        fill="#001F5C"
      />
      <path
        d="M272.928 118.54L272.924 118.541C271.324 118.548 269.77 119.078 268.499 120.05C267.228 121.021 266.308 122.38 265.879 123.921C264.951 127.175 263.315 130.572 261.897 133.174C261.19 134.471 260.542 135.562 260.071 136.327C259.835 136.71 259.645 137.011 259.513 137.216L259.5 137.236C259.302 137.382 259.174 137.617 259.174 137.881V181.745C259.174 182.187 259.532 182.545 259.974 182.545C260.416 182.545 260.774 182.187 260.774 181.745V138.213C260.799 138.174 260.827 138.13 260.859 138.081C260.996 137.868 261.192 137.558 261.434 137.166C261.916 136.381 262.579 135.266 263.302 133.94C264.743 131.296 266.443 127.779 267.419 124.357L267.42 124.352C267.756 123.145 268.475 122.081 269.47 121.321C270.464 120.561 271.679 120.147 272.93 120.14H273.008C273.45 120.14 273.808 119.782 273.808 119.34C273.808 118.899 273.45 118.54 273.008 118.54L272.928 118.54Z"
        fill="#001F5C"
      />
      <path
        d="M275.428 139.62C275.399 139.179 275.019 138.845 274.578 138.874C274.137 138.903 273.803 139.284 273.832 139.725C274.038 142.859 272.966 144.878 271.878 146.115C271.328 146.741 270.766 147.176 270.344 147.453C270.134 147.591 269.96 147.688 269.843 147.749C269.785 147.78 269.74 147.801 269.713 147.814L269.693 147.824L269.685 147.827L269.684 147.828L269.997 148.564C269.684 147.828 269.684 147.828 269.684 147.828L269.682 147.828L269.681 147.829C269.277 148.003 269.088 148.471 269.26 148.877C269.433 149.284 269.903 149.473 270.31 149.3L270.007 148.589C270.31 149.3 270.309 149.3 270.31 149.3L270.312 149.299L270.314 149.298L270.32 149.296L270.338 149.288C270.352 149.282 270.371 149.273 270.394 149.262C270.441 149.24 270.505 149.209 270.585 149.167C270.743 149.084 270.963 148.96 271.222 148.791C271.738 148.452 272.417 147.926 273.08 147.171C274.42 145.646 275.665 143.219 275.428 139.62Z"
        fill="#001F5C"
      />
      <path
        d="M284.837 149.39C285.275 149.334 285.676 149.643 285.733 150.082L288.942 174.989C288.999 175.427 288.689 175.828 288.251 175.885C287.813 175.941 287.412 175.632 287.355 175.194L284.146 150.286C284.089 149.848 284.399 149.447 284.837 149.39Z"
        fill="#001F5C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M286.384 144.03C285.587 141.214 287.224 138.284 290.04 137.487C292.856 136.689 295.786 138.326 296.583 141.142L304.444 168.901C305.242 171.717 303.605 174.647 300.789 175.444C297.972 176.242 295.043 174.605 294.245 171.789L286.384 144.03ZM290.476 139.026C288.51 139.583 287.367 141.628 287.924 143.594L295.785 171.353C296.341 173.319 298.387 174.462 300.353 173.905C302.319 173.348 303.461 171.303 302.905 169.337L295.044 141.578C294.487 139.612 292.442 138.469 290.476 139.026Z"
        fill="#001F5C"
      />
      <path
        d="M91.6338 89.7113C91.241 89.509 91.0866 89.0266 91.2889 88.6338C91.4913 88.241 91.9737 88.0866 92.3665 88.289C100.792 92.6292 104.314 97.7881 105.947 102.685C106.754 105.108 107.09 107.44 107.349 109.502C107.377 109.731 107.405 109.955 107.432 110.175C107.654 111.977 107.842 113.495 108.259 114.747C108.97 116.879 110.561 118.231 112.354 119.003C114.164 119.782 116.106 119.934 117.361 119.712C117.796 119.636 118.211 119.926 118.288 120.361C118.365 120.796 118.074 121.211 117.639 121.288C116.061 121.567 113.803 121.368 111.721 120.472C109.622 119.569 107.631 117.921 106.741 115.253C106.269 113.838 106.062 112.146 105.845 110.379C105.817 110.154 105.79 109.928 105.761 109.701C105.504 107.654 105.183 105.455 104.429 103.191C102.936 98.7122 99.7086 93.8711 91.6338 89.7113Z"
        fill="#001F5C"
      />
      <path
        d="M96.7597 82.1973C96.5924 82.6062 96.7883 83.0733 97.1972 83.2406C105.767 86.7465 110.156 93.4657 111.255 96.2901C111.415 96.7019 111.878 96.9059 112.29 96.7458C112.702 96.5856 112.906 96.122 112.746 95.7102C111.511 92.5346 106.833 85.4539 97.803 81.7597C97.3941 81.5924 96.927 81.7883 96.7597 82.1973Z"
        fill="#001F5C"
      />
      <path
        d="M103.397 76.7934C102.959 76.7363 102.65 76.3348 102.707 75.8967C102.764 75.4586 103.165 75.1497 103.604 75.2069C108.496 75.8451 112.291 78.9825 115.021 82.5243C117.754 86.0701 119.495 90.1139 120.268 92.7771C120.392 93.2014 120.147 93.6452 119.723 93.7684C119.299 93.8916 118.855 93.6475 118.732 93.2232C118.005 90.7197 116.346 86.8636 113.754 83.5011C111.159 80.1345 107.704 77.3552 103.397 76.7934Z"
        fill="#001F5C"
      />
      <path
        d="M126.187 81.6029C124.033 81.7734 122.154 82.603 121.056 83.3347C120.689 83.5798 120.589 84.0765 120.834 84.4441C121.08 84.8117 121.576 84.9111 121.944 84.666C122.846 84.0644 124.467 83.344 126.313 83.1979C128.136 83.0536 130.157 83.4676 131.965 85.095C133.799 86.7455 134.737 88.9425 135.152 91.0664C135.513 92.9123 135.469 94.6572 135.301 95.8407C134.392 95.9978 133.28 95.9097 132.049 95.2867C130.58 94.543 128.889 93.0084 127.191 90.0973C126.969 89.7157 126.479 89.5868 126.097 89.8094C125.715 90.032 125.586 90.5219 125.809 90.9035C127.611 93.9924 129.503 95.7912 131.326 96.7141C132.475 97.296 133.575 97.5182 134.568 97.5083C133.493 98.144 132.532 99.0123 131.835 100.056C131.589 100.423 131.688 100.92 132.056 101.165C132.423 101.411 132.92 101.312 133.165 100.944C134.052 99.6174 135.513 98.6087 137.033 98.1659C138.422 97.7616 139.74 97.8571 140.696 98.462C140.764 100.904 140.055 105.187 137.851 109.293C135.545 113.59 131.632 117.643 125.306 119.224C124.878 119.331 124.617 119.766 124.724 120.194C124.831 120.623 125.265 120.883 125.694 120.776C132.549 119.063 136.791 114.652 139.261 110.05C141.717 105.473 142.452 100.658 142.275 97.9861C142.26 97.763 142.153 97.5563 141.979 97.4161C140.529 96.2469 138.584 96.1039 136.802 96.5701C137.059 95.2173 137.172 93.0557 136.723 90.7594C136.263 88.4083 135.201 85.8552 133.035 83.9057C130.843 81.9331 128.364 81.4305 126.187 81.6029Z"
        fill="#001F5C"
      />
    </svg>
  );
};

export default EarringsRhombus;
