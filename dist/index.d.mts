import React, { MouseEvent, ChangeEvent, FocusEvent, ReactNode, FC } from 'react';
import { SingleValue, MultiValue, ActionMeta } from 'react-select';
import { AxiosRequestConfig } from 'axios';

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
    type?: "text" | "button" | "number" | "color" | "password" | "email" | "file" | "range" | "url";
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

interface Option$2 {
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
    options: Option$2[];
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
    hintInnerClass?: string;
}
declare const MultiCheckBox: React.FC<MultiCheckBoxProps>;

interface MultiNumOption {
    key: string;
    value: string | number;
    label: string;
    name?: string;
    type: string;
}
interface MultiNumInputProps {
    parentWrapperClass?: string;
    childWrapperClass?: string;
    options: MultiNumOption[];
    value?: {
        key: string;
        value: string | number;
    }[];
    inputWrapperClass?: string;
    innerInputWrapperClass?: string;
    inputLabelClass?: string;
    inputClass?: string;
    idPrefix?: string;
    keyName?: string;
    proSetting?: boolean;
    description?: string;
    descClass?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>, keyName?: string, optionKey?: string, index?: number) => void;
}
declare const MultiNumInput: React.FC<MultiNumInputProps>;

interface RadioOption {
    key: string;
    keyName?: string;
    value: string;
    label: string;
    name: string;
    color?: string[] | string;
}
interface RadioInputProps {
    name?: string;
    wrapperClass?: string;
    inputWrapperClass?: string;
    activeClass?: string;
    inputClass?: string;
    idPrefix?: string;
    type?: "radio-select" | "radio-color" | "default";
    options: RadioOption[];
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    radiSelectLabelClass?: string;
    labelImgClass?: string;
    labelOverlayClass?: string;
    labelOverlayText?: string;
    proSetting?: boolean;
    description?: string;
    descClass?: string;
    keyName?: string;
}
declare const RadioInput: React.FC<RadioInputProps>;

interface SelectOptions {
    value: string;
    label: string;
    index?: number;
}
interface SelectInputProps {
    wrapperClass?: string;
    selectDeselect?: boolean;
    selectDeselectClass?: string;
    selectDeselectValue?: string;
    onMultiSelectDeselectChange?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    options: SelectOptions[];
    value?: string;
    inputClass?: string;
    type?: "single-select" | "multi-select";
    onChange?: (newValue: SingleValue<SelectOptions> | MultiValue<SelectOptions>, actionMeta: ActionMeta<SelectOptions>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
    proSetting?: boolean;
    description?: string;
    descClass?: string;
}

interface TextAreaProps {
    wrapperClass?: string;
    inputClass?: string;
    id?: string;
    name?: string;
    value?: string | number;
    maxLength?: number;
    placeholder?: string;
    rowNumber?: number;
    colNumber?: number;
    proSetting?: boolean;
    description?: string;
    descClass?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onClick?: (e: MouseEvent<HTMLTextAreaElement>) => void;
    onMouseOver?: (e: MouseEvent<HTMLTextAreaElement>) => void;
    onMouseOut?: (e: MouseEvent<HTMLTextAreaElement>) => void;
    onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
}
declare const TextArea: React.FC<TextAreaProps>;

interface CheckboxCustomImgProps {
    wrapperClass?: string;
    syncDirectionsClass?: string;
    syncMetaClass?: string;
    settingsMetaDescriptionClass?: string;
    labelClass?: string;
    value?: string[];
    onChange: (updatedValue: string[]) => void;
    syncDirections: {
        value: string;
        img1: string;
        img2: string;
        label: string;
    }[];
    description?: string;
    proSetting?: boolean;
}
declare const CheckboxCustomImg: React.FC<CheckboxCustomImgProps>;

interface LogProps {
    fetchApiLink: string;
    downloadApiLink: string;
    downloadFileName: string;
    appLocalizer?: {
        nonce?: string;
        tab_name?: string;
    };
}
declare const Log: React.FC<LogProps>;

interface AutoGeneratedDefaultInputProps {
    value: string;
    proSetting?: boolean;
    onChange: (newValue: string) => void;
    description?: string;
}
declare const AutoGeneratedDefaultInput: React.FC<AutoGeneratedDefaultInputProps>;

interface SyncMapProps {
    value?: [string, string][];
    onChange: (value: [string, string][]) => void;
    proSetting?: boolean;
    proSettingChanged: () => boolean;
    description?: string;
    syncFieldsMap: Record<string, {
        heading: string;
        fields: Record<string, string>;
    }>;
}

interface Task {
    action: string;
    message: string;
    cache?: "course_id" | "user_id";
}
interface ConnectButtonProps {
    apiLink: string;
    tasks: Task[];
}

interface SyncNowProps {
    buttonKey: string;
    interval: number;
    proSetting: boolean;
    proSettingChanged: () => boolean;
    value: string;
    description: string;
    apilink: string;
    statusApiLink: string;
}

interface Option$1 {
    key: string;
    value: string;
    label: string;
}
interface ToggleSettingProps {
    description?: string;
    key?: string;
    options: Option$1[];
    wrapperClass?: string;
    descClass?: string;
    value: string;
    onChange: (value: string) => void;
    proSetting?: boolean;
}

interface CatalogCustomizerProps {
    onChange: (key: string, value: any) => void;
    proSetting?: boolean;
    setting: Record<string, any>;
}

interface MapsInputProps {
    LatVal: number;
    LngVal: number;
    wrapperClass: string;
    containerId: string;
    containerClass: string;
    proSetting: string;
    description: string;
    descClass: string;
}

interface SelectOption {
    value: string;
    label: string;
}

interface ProPopupProps {
    proUrl?: string;
}
declare const ProPopup: React.FC<ProPopupProps>;

interface ModulePopupProps {
    name?: string;
    settings?: string;
    plugin?: string;
}
declare const ModulePopup: React.FC<ModulePopupProps>;

interface TableCellProps {
    value?: string;
    title?: string;
    children?: React.ReactNode;
}
declare const TableCell: React.FC<TableCellProps>;
interface CustomTableProps {
    data: any[] | null;
    columns: any[];
    selectable?: boolean;
    handleSelect?: (selectedRows: any[], selectedCount: number, allSelected: boolean) => void;
    handlePagination?: (rowsPerPage: number, currentPage: number, filterData: Record<string, any>) => void;
    defaultRowsParPage?: number;
    defaultCurrentPage?: number;
    defaultTotalRows: number;
    perPageOption: number[];
    realtimeFilter?: {
        name: string;
        render: (handleFilterChange: (key: string, value: any) => void, value: any) => JSX.Element;
    }[];
    autoLoading?: boolean;
    typeCounts?: {
        key: string;
        name: string;
        count: number;
    }[];
    bulkActionComp?: () => JSX.Element;
    handleMouseEnter?: () => void;
    handleMouseLeave?: () => void;
}

interface ButtonProp {
    customStyle: {
        button_border_size?: number;
        button_border_color?: string;
        button_background_color?: string;
        button_text_color?: string;
        button_border_radious?: number;
        button_font_size?: number;
        button_font_width?: number;
        button_margin?: number;
        button_padding?: number;
        button_border_color_onhover?: string;
        button_text_color_onhover?: string;
        button_background_color_onhover?: string;
        button_text?: string;
    };
    children?: React.ReactNode;
    onClick?: () => void;
}

interface BlockTextProps {
    wrapperClass: string;
    blockTextClass: string;
    value: string;
}

interface LabelProps {
    wrapperClass: string;
    descClass: string;
    description: string;
    value: string;
}

interface SectionProps {
    wrapperClass: string;
    hint: string;
    value: string;
}

interface WpEditorProps {
    apiKey: string;
    value: string;
    onEditorChange: (content: string) => void;
}

interface TabContent {
    id: string;
    name: string;
    desc?: string;
    icon?: string;
    link?: string;
    proDependent?: boolean;
}
interface TabData {
    type: "file" | "folder";
    content: TabContent | TabData[];
}
interface TabsProps {
    tabData: TabData[];
    currentTab: string;
    getForm: (tabId: string) => ReactNode;
    prepareUrl: (tabId: string) => string;
    HeaderSection?: FC;
    BannerSection?: FC;
    horizontally?: boolean;
}

declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: {
                action: string;
            }) => Promise<string>;
        };
    }
}
interface Option {
    value: string;
    label: string;
    isdefault?: boolean;
}
interface Field {
    type: string;
    name?: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    charlimit?: number;
    row?: number;
    col?: number;
    disabled?: boolean;
    options?: Option[];
    sitekey?: string;
    key?: string;
}
interface FormFields {
    formfieldlist: Field[];
    butttonsetting?: any;
}
interface FromViewerProps {
    formFields: FormFields;
    onSubmit: (data: FormData) => void;
}

interface SettingState {
    settingName: string;
    setting: Record<string, any>;
}
interface SettingProviderProps {
    children: ReactNode;
}
declare const SettingProvider: React.FC<SettingProviderProps>;
declare const useSetting: () => SettingState & {
    setSetting: (settingName: string, setting: Record<string, any>) => void;
    updateSetting: (key: string, value: any) => void;
    clearSetting: () => void;
};

type ModuleState = string[];
interface ModuleProviderProps {
    children: ReactNode;
    modules?: string[];
}
declare const ModuleProvider: React.FC<ModuleProviderProps>;
declare const useModules: () => {
    modules: ModuleState;
    insertModule: (moduleName: string) => void;
    removeModule: (moduleName: string) => void;
};

/**
 * Get response from REST API.
 * @param url - API URL
 * @param headers - Request headers
 * @returns API response data or null in case of an error
 */
declare const getApiResponse: <T>(url: string, headers?: AxiosRequestConfig) => Promise<T | null>;
/**
 * Send response to REST API.
 * @param url - API URL
 * @param data - Data to send
 * @param headers - Request headers
 * @returns API response data or null in case of an error
 */
declare const sendApiResponse: <T>(url: string, data: unknown, headers?: AxiosRequestConfig) => Promise<T | null>;
/**
 * Generate API endpoint URL.
 * @param endpoint - API endpoint
 * @param namespace - API namespace (optional)
 * @param rootUrl - API root URL (optional)
 * @returns Complete API URL
 */
declare const getApiLink: (endpoint: string, namespace?: string, rootUrl?: string) => string;

export { AutoGeneratedDefaultInput, type AutoGeneratedDefaultInputProps, BasicInput, type BasicInputProps, type BlockTextProps, Button, type ButtonProp, type ButtonProps, CalendarInput, type CalendarInputProps, Card, type CardProps, type CatalogCustomizerProps, CheckboxCustomImg, type CheckboxCustomImgProps, type ConnectButtonProps, type CustomTableProps, FileInput, type FileInputProps, type FromViewerProps, Heading, type HeadingProps, type LabelProps, Log, type LogProps, type MapsInputProps, ModulePopup, type ModulePopupProps, ModuleProvider, MultiCheckBox, type MultiCheckBoxProps, MultiNumInput, type MultiNumInputProps, type MultiNumOption, type Option$2 as Option, ProPopup, type ProPopupProps, RadioInput, type RadioInputProps, type RadioOption, type SectionProps, type SelectInputProps, type SelectOption, type SelectOptions, SettingProvider, type SyncMapProps, type SyncNowProps, TableCell, type TabsProps, TextArea, type TextAreaProps, type ToggleSettingProps, type WpEditorProps, getApiLink, getApiResponse, sendApiResponse, useModules, useSetting };
