"use client";

import React from 'react';

const Header = ({
    title,
    subtitle,
    className,
    ...props
}) => {
    const baseClassName = className || 'bg-gray-800 text-white p-4';

    return (
        <header className={baseClassName} {...props}>
            <h1 className="text-3xl font-bold">{title}</h1>
            {subtitle && <p className="text-lg">{subtitle}</p>}
        </header>
    );
};

export default Header;