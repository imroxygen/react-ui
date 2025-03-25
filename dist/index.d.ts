import React, { MouseEvent } from 'react';

declare const AdminFooter: React.FC;

interface ButtonProps {
    wrapperClass?: string;
    inputClass?: string;
    type?: "button" | "submit" | "reset";
    value?: string;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    proSetting?: boolean;
    description?: string;
    descClass?: string;
}
declare const Button: React.FC<ButtonProps>;

declare const Banner: React.FC;

export { AdminFooter, Banner, Button };
