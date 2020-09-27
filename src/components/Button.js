import React from 'react';

const Button = ({ text, type, color }) => (
    <button className={`btn btn--${color}`} type={type}>
        <span>{text}</span>
    </button>
)

export default Button