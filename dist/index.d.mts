import React from 'react';

interface ButtonProps {
    label: string;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    disabled?: boolean;
}
declare const Button: React.FC<ButtonProps>;

interface CardProps {
    title?: string;
    children: React.ReactNode;
    width?: string;
    elevation?: 'low' | 'medium' | 'high';
}
declare const Card: React.FC<CardProps>;

export { Button, type ButtonProps, Card, type CardProps };
