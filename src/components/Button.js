import React from 'react';

const Button = ({ text, type, color }) => (
    <button className={`btn btn--${color}`} type={type}>
        {text}
    </button>
)

export default Button