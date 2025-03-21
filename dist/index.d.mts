import React, { MouseEvent, ChangeEvent, FocusEvent } from 'react';

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

interface CardProps {
    title?: string;
    children: React.ReactNode;
    width?: string;
    elevation?: 'low' | 'medium' | 'high';
}
declare const Card: React.FC<CardProps>;

interface BasicInputProps {
    wrapperClass?: string;
    inputLabel?: string;
    inputClass?: string;
    id?: string;
    type?: "text" | "number" | "password" | "email" | "file" | "range";
    name?: string;
    value?: string | number;
    placeholder?: string;
    min?: number;
    max?: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onMouseOver?: (e: MouseEvent<HTMLInputElement>) => void;
    onMouseOut?: (e: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    parameter?: string;
    proSetting?: boolean;
    description?: string;
    descClass?: string;
    rangeUnit?: string;
    disabled?: boolean;
}
declare const BasicInput: React.FC<BasicInputProps>;

interface CalendarInputProps {
    wrapperClass?: string;
    inputClass?: string;
    format?: string;
    multiple?: boolean;
    range?: boolean;
    value: string;
    onChange?: (date: any) => void;
    proSetting?: boolean;
}
declare const CalendarInput: React.FC<CalendarInputProps>;

interface FileInputProps {
    wrapperClass?: string;
    inputClass?: string;
    id?: string;
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onMouseOver?: (e: MouseEvent<HTMLInputElement>) => void;
    onMouseOut?: (e: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    proSetting?: boolean;
    imageSrc?: string;
    imageWidth?: number | string;
    imageHeight?: number | string;
    buttonClass?: string;
    onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    openUploader?: string;
    description?: string;
    descClass?: string;
}
declare const FileInput: React.FC<FileInputProps>;

interface HeadingProps {
    wrapperClass?: string;
    blocktext?: string;
}
declare const Heading: React.FC<HeadingProps>;

interface Option {
    key: string;
    value: string;
    label: string;
    name?: string;
    proSetting?: boolean;
    hints?: string;
}
interface MultiCheckBoxProps {
    wrapperClass?: string;
    selectDeselect?: boolean;
    selectDeselectClass?: string;
    selectDeselectValue?: string;
    onMultiSelectDeselectChange?: (e: MouseEvent<HTMLButtonElement>) => void;
    options: Option[];
    value?: string[];
    inputWrapperClass?: string;
    rightContent?: boolean;
    rightContentClass?: string;
    inputInnerWrapperClass?: string;
    tour?: string;
    inputClass?: string;
    idPrefix?: string;
    type?: "checkbox" | "radio";
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    proChanged?: () => void;
    proSetting?: boolean;
    hintOuterClass?: string;
    description?: string;
    descClass?: string;
}
declare const MultiCheckBox: React.FC<MultiCheckBoxProps>;

export { BasicInput, type BasicInputProps, Button, type ButtonProps, CalendarInput, type CalendarInputProps, Card, type CardProps, FileInput, type FileInputProps, Heading, type HeadingProps, MultiCheckBox, type MultiCheckBoxProps, type Option };
