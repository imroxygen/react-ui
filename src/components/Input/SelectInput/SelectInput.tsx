import React from "react";
import Select, { MultiValue, SingleValue, ActionMeta } from "react-select";

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectInputProps {
    wrapperClass?: string;
    selectDeselect?: boolean;
    selectDeselectClass?: string;
    selectDeselectValue?: string;
    onMultiSelectDeselectChange?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    options: SelectOption[];
    value?: string;
    inputClass?: string;
    type?: "single-select" | "multi-select";
    onChange?: (
        newValue: SingleValue<SelectOption> | MultiValue<SelectOption>,
        actionMeta: ActionMeta<SelectOption>
    ) => void;
    proSetting?: boolean;
    description?: string;
    descClass?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
    wrapperClass,
    selectDeselect,
    selectDeselectClass,
    selectDeselectValue,
    onMultiSelectDeselectChange,
    options,
    value,
    inputClass,
    type = "single-select",
    onChange,
    proSetting,
    description,
    descClass,
}) => {
    // Convert options to react-select format
    const optionsData = options.map((option) => ({
        value: option.value,
        label: option.label,
    }));

    // Find default selected value
    const defaultValue = optionsData.find((opt) => opt.value === value) || null;

    return (
        <div className={wrapperClass}>
            {selectDeselect && (
                <button
                    className={selectDeselectClass}
                    onClick={(e) => {
                        e.preventDefault();
                        onMultiSelectDeselectChange?.(e);
                    }}
                >
                    {selectDeselectValue}
                </button>
            )}
            <Select
                className={inputClass}
                value={defaultValue}
                options={optionsData}
                onChange={(newValue, actionMeta) => onChange?.(newValue, actionMeta)}
                isMulti={type === "multi-select"}
            />
            {proSetting && <span className="admin-pro-tag">pro</span>}
            {description && (
                <p className={descClass} dangerouslySetInnerHTML={{ __html: description }}></p>
            )}
        </div>
    );
};

export default SelectInput;
