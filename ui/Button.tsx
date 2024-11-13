import React from 'react';
import { ReactNode } from 'react';

type ButtonProps = {
  label: string;
  className?: string; 
  variant?: 'primary' | 'secondary' | 'borderless'; 
  icon?: ReactNode; 
  onClick?: () => void; 
};

const Button = ({
  label = 'Start',
  className = '',
  variant = 'primary', // Default to primary variant
  icon,
  onClick
}: ButtonProps) => {
  // Define common base classes for all buttons
  const baseStyles = 'px-4 py-2 rounded-full inline-flex items-center justify-center';

  // Conditional classes for each variant
  const variantStyles = {
    primary: 'bg-secondary text-white hover:bg-primary-dark',
    secondary: 'border ',
    borderless: 'bg-transparent text-primary hover:text-primary-dark',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>} {/* Only render the icon if provided */}
      <span>{label}</span>
    </button>
  );
};

export default Button;
