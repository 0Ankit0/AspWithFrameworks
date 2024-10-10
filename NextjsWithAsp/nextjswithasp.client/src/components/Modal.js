"use client";

import React from 'react';

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    className,
    ...props
}) => {
    if (!isOpen) return null;

    const baseClassName = className || 'fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300';
    const modalClassName = 'bg-white p-4 rounded shadow-lg transition-opacity duration-300';

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={`${baseClassName} ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={handleOverlayClick} {...props}>
            <div className={`${modalClassName} ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
                </div>
                <div className="mt-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;