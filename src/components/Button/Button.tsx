import React from 'react';
import './Button.css';

export interface ButtonProps {
  label: string;
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  primary = false,
  size = 'medium',
  onClick,
  disabled = false,
}) => {
  const mode = primary ? 'button-primary' : 'button-secondary';
  
  return (
    <button
      type="button"
      className={['button', `button-${size}`, mode].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};