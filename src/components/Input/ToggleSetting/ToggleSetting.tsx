import React from 'react';
import './ToggleSetting.scss';

interface Option {
    key: string;
    value: string;
    label: string;
}

export interface ToggleSettingProps {
    description?: string;
    key?: string;
    options: Option[];
    wrapperClass?: string;
    descClass?: string;
    value: string;
    onChange: (value: string) => void;
    proSetting?: boolean;
}

const ToggleSetting: React.FC<ToggleSettingProps> = ({
    description,
    key,
    options,
    wrapperClass = '',
    descClass = '',
    value,
    onChange,
    proSetting = false,
}) => {
    return (
        <section className={wrapperClass}>
            <div className='toggle-setting-container'>
                <ul>
                    {options?.map((option, index) => {
                        const checked = value === option.value;
                        return (
                            <li key={option.key} onClick={() => onChange(option.value)}>
                                <input
                                    className="toggle-setting-form-input"
                                    type="radio"
                                    id={option.key}
                                    name="approve_vendor"
                                    value={value}
                                    checked={checked}
                                    readOnly
                                />
                                <label htmlFor={option.key}>{option.label}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {proSetting && <span className="admin-pro-tag">pro</span>}
            {description && (
                <p className={descClass} dangerouslySetInnerHTML={{ __html: description }}></p>
            )}
        </section>
    );
};

export default ToggleSetting;
