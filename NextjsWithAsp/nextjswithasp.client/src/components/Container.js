"use client";

import React from 'react';

const Container = ({
    children,
    className,
    ...props
}) => {
    const baseClassName = className || 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

    return (
        <div className={baseClassName} {...props}>
            {children}
        </div>
    );
};

export default Container;