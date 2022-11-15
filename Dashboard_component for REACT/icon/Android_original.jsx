
import React from 'react';

const Android_original = ({ color = 'currentColor', strokeWidth = '0', strokeColor = 'currentColor', size = '64', ...rest }) => {
    return (
        <svg

            xmlns="http://www.w3.org/2000/svg"

            width={size}
            height={size}
            fill={color}
            stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
            {...rest}

            viewBox="0 0 64 64">
            <g>
                <path d="M14.8,46.5c0,2.3,1.8,4.2,4.2,4.2h2.7v8.5c0,2.1,1.7,3.8,3.8,3.8s3.8-1.7,3.8-3.8v-8.5h5.1v8.5c0,2.1,1.7,3.8,3.8,3.8
		c2.1,0,3.8-1.7,3.8-3.8v-8.5h2.7c2.3,0,4.2-1.8,4.2-4.2V21.9H14.8V46.5z"/>
                <path d="M40.5,6.8L43.1,2c0.1-0.3,0.1-0.6-0.1-0.7C42.8,1,42.7,1,42.7,1c-0.1,0-0.4,0.1-0.4,0.3l-2.7,4.9c-2.3-1-4.8-1.5-7.3-1.5
		c-2.7,0-5.1,0.6-7.3,1.5l-2.7-4.9c-0.1-0.3-0.4-0.4-0.7-0.1c-0.3,0.1-0.4,0.4-0.1,0.7l2.7,4.8c-5.6,2.8-9,7.9-9,13.8h34.2
		C49.2,14.5,45.5,9.5,40.5,6.8z M24.1,14.3c-0.7,0-1.4-0.7-1.4-1.4s0.7-1.4,1.4-1.4s1.4,0.7,1.4,1.4S25,14.3,24.1,14.3z M39.9,14.3
		c-0.7,0-1.4-0.7-1.4-1.4s0.7-1.4,1.4-1.4c0.7,0,1.4,0.7,1.4,1.4S40.7,14.3,39.9,14.3z"/>
                <path d="M9.6,21.2c-2.1,0-3.8,1.7-3.8,3.8v15.9c0,2.1,1.7,3.8,3.8,3.8s3.8-1.7,3.8-3.8V25C13.5,22.8,11.7,21.2,9.6,21.2z" />
                <path d="M54.4,21.2c-2.1,0-3.8,1.7-3.8,3.8v15.9c0,2.1,1.7,3.8,3.8,3.8c2.1,0,3.8-1.7,3.8-3.8V25C58.2,22.8,56.5,21.2,54.4,21.2z"
                />
            </g>
        </svg>

    );
};
// https://github.com/SRAKIB17/ReactCustomIconsLibrary.git

export default Android_original;

