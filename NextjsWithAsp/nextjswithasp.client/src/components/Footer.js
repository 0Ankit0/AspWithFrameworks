"use client";

import React from 'react';

const Footer = ({
    children,
    className,
    ...props
}) => {
    const baseClassName = className || 'bg-gray-800 text-white p-4';

    return (
        <footer className={baseClassName} {...props}>
            {children}
        </footer>
    );
};

export default Footer;