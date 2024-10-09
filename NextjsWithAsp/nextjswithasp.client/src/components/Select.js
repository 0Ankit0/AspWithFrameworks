"use client";

import React from 'react';

const Select = ({
    options,
    value,
    onChange,
    className,
    disabled,
    ...props
}) => {
    const baseClassName = className || 'border py-2 px-4 rounded';

    return (
        <select
            value={value}
            onChange={onChange}
            className={baseClassName}
            disabled={disabled}
            {...props}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;