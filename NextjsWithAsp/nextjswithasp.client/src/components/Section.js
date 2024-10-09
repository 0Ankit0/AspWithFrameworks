"use client";

import React from 'react';

const Section = ({
    title,
    children,
    className,
    ...props
}) => {
    const baseClassName = className || 'py-8';

    return (
        <section className={baseClassName} {...props}>
            {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
            {children}
        </section>
    );
};

export default Section;