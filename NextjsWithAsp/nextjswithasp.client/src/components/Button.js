"use client";

import React, { useState } from 'react';

const Button = ({
    onClick,
    children,
    className,
    disabled,
    loading,
    variant,
    size,
    icon,
    tooltip,
    ...props
}) => {
    const [hover, setHover] = useState(false);

    // Set default props manually
    const handleClick = onClick || (() => { alert('You clicked the button'); });
    const buttonClassName = `${className || 'bg-blue-500 text-white py-2 px-4 rounded'} ${variant || ''} ${size || ''}`;
    const hoverClassName = 'bg-blue-700 text-white py-2 px-4 rounded';

    // Validate required props
    if (!children) {
        throw new Error('The "children" prop is required.');
    }

    return (
        <button
            onClick={handleClick}
            className={hover ? hoverClassName : buttonClassName}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            disabled={disabled || loading}
            title={tooltip}
            {...props}
        >
            {loading ? 'Loading...' : (
                <>
                    {icon && <span className="icon">{icon}</span>}
                    {children}
                </>
            )}
        </button>
    );
};

export default Button;