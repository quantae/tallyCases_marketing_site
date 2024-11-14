import React from 'react';
import { ReactNode } from 'react';

type ButtonProps = {
  label: string;
  className?: string; 
  variant?: 'primary' | 'secondary' | 'borderless'; 
  icon?: ReactNode; 
  type?: string;
  onClick?: () => void; 
  [key: string]: any;
};

const Button = ({
  label = 'Start',
  className = '',
  variant = 'primary', // Default to primary variant
  icon,
  onClick,
  ...props
}: ButtonProps) => {
  // Define common base classes for all buttons
  const baseStyles = 'px-4 rounded inline-flex items-center justify-center';

  // Conditional classes for each variant
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-slate-800',
    secondary: 'border ',
    borderless: 'hover:text-gray-800 font-semibold',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>} {/* Only render the icon if provided */}
      <span>{label}</span>
    </button>
  );
};

export default Button;
