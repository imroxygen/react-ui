import React, { useState, useEffect, useRef } from 'react';
import './MergeComponent.scss';

interface Field {
    name: string;
    type: 'select' | 'number';
    options?: { value: string; label: string }[];
    placeholder?: string;
}

export interface MergeComponentProps {
    wrapperClass?: string;
    descClass?: string;
    description?: string;
    onChange: (data: Record<string, string>) => void;
    value: Record<string, string>;
    proSetting?: boolean;
    fields?: Field[];
}

const MergeComponent: React.FC<MergeComponentProps> = ({ 
    wrapperClass = '', 
    descClass = '', 
    description = '', 
    onChange, 
    value, 
    proSetting = false, 
    fields = []
}) => {
    const firstRender = useRef(true);

    // Initialize state based on field names dynamically
    const initialState = fields.reduce<Record<string, string>>((acc, field) => {
        acc[field.name] = value[field.name] || '';
        return acc;
    }, {});
    const [data, setData] = useState<Record<string, string>>(initialState);

    const handleOnChange = (key: string, newValue: string) => {
        setData((previousData) => ({ ...previousData, [key]: newValue }));
    };

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return; // Prevent the initial call
        }
        onChange(data);
    }, [data, onChange]);

    return (
        <main className={wrapperClass}>
            <section className='select-input-section merge-components'>
                {fields.map((field, index) => {
                    const { name, type, options = [], placeholder = "Enter a value" } = field;

                    // Dynamically render field based on type
                    if (type === 'select') {
                        return (
                            <select key={index} id={name} value={data[name]} onChange={(e) => handleOnChange(name, e.target.value)}>
                                <option value="">Select</option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        );
                    } else if (type === 'number') {
                        return (
                            <input
                                key={index}
                                type={type}
                                id={name}
                                placeholder={placeholder}
                                value={data[name]}
                                min="1"
                                onChange={(e) => handleOnChange(name, e.target.value)}
                            />
                        );
                    }

                    return null; // Return null if type is not recognized
                })}
            </section>
            {description && <p className={descClass} dangerouslySetInnerHTML={{ __html: description }} />}
            {proSetting && <span className="admin-pro-tag">pro</span>}
        </main>
    );
};

export default MergeComponent;
