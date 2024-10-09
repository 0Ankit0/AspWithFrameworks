"use client";

import React from 'react';

const Checkbox = ({
    checked,
    onChange,
    label,
    className,
    disabled,
    ...props
}) => {
    const baseClassName = className || 'form-checkbox';

    return (
        <label className="flex items-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={baseClassName}
                disabled={disabled}
                {...props}
            />
            <span className="ml-2">{label}</span>
        </label>
    );
};

export default Checkbox;