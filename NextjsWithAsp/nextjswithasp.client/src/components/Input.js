"use client";

import React from 'react';

const Input = ({
    type = 'text',
    value,
    onChange,
    placeholder,
    className,
    disabled,
    ...props
}) => {
    const baseClassName = className || 'border py-2 px-4 rounded';

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={baseClassName}
            disabled={disabled}
            {...props}
        />
    );
};

export default Input;