"use client";

import React from 'react';

const Card = ({
    title,
    children,
    className,
    ...props
}) => {
    const baseClassName = className || 'bg-white p-4 rounded shadow-lg';

    return (
        <div className={baseClassName} {...props}>
            {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
            <div>
                {children}
            </div>
        </div>
    );
};

export default Card;