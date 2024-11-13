/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';

interface ClickOutsideProps {
    className: string;
    onClick: () => void;
    exceptionRef: React.MutableRefObject<HTMLElement | HTMLButtonElement |null>; 

    children: React.ReactNode;
}

/**
 * 
 * @param {*} param0 
 * @returns 
 * children: is anything that goes under the outer div tag that is referenced.
 * exceptionRef: can be a component or a simple div tag that is referenced, which can be literally an exception for its function. That is, when exceptionRef is clicked, it is thought to happen in the inside of ClickOutside component
 * onClick: is a handler function that is passed to this component. It will be executed when the click event happens outside of the component.
 * className: makes the component have a className so you can apply css to the component.
 */


const ClickOutside = ({ children, exceptionRef, onClick, className }: ClickOutsideProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickListener);
        return () => {
            document.removeEventListener('mousedown', handleClickListener);
        };
    }, );

    const handleClickListener = (event: MouseEvent) => {
        let clickedInside = false;

        if (exceptionRef.current) {
            clickedInside = (wrapperRef.current?.contains(event.target as Node)) || 
                            (exceptionRef.current === event.target) || 
                            (exceptionRef.current?.contains(event.target as Node));
        } else {
            clickedInside = wrapperRef.current?.contains(event.target as Node) ?? false;
        }

        if (!clickedInside) {
            onClick();
        }
    };

    return (
        <div ref={wrapperRef} className={`${className || ''}`}>
            {children}
        </div>
    );
};

export default ClickOutside;
