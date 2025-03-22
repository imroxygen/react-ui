import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
interface FormField {
    type: string;
    name: string;
    placeholder?: string;
    charlimit?: number;
    row?: number;
    column?: number;
    sitekey?: string;
    filesize?: number;
    required?: boolean;
    disabled?: boolean;
}

interface InputType {
    value: string;
    label: string;
}

interface SettingMetaBoxProps {
    formField: FormField;
    inputTypeList: InputType[];
    onChange: (field: keyof FormField, value: any) => void;
    onTypeChange: (value: string) => void;
    opened: { click: boolean };
}

const FormFieldSelect: React.FC<{ inputTypeList: InputType[]; formField: FormField; onTypeChange: (value: string) => void }> = ({ inputTypeList, formField, onTypeChange }) => (
    <FieldWrapper label="Type">
        <select onChange={(event) => onTypeChange(event.target.value)} value={formField.type}>
            {inputTypeList.map((inputType) => (
                <option key={inputType.value} value={inputType.value}>
                    {inputType.label}
                </option>
            ))}
        </select>
    </FieldWrapper>
);

const FieldWrapper: React.FC<{ label: string; className?: string; children: React.ReactNode }> = ({ label, children, className }) => (
    <article className={`modal-content-section-field ${className || ""}`} onClick={(e) => e.stopPropagation()}>
        <p>{label}</p>
        {children}
    </article>
);

const InputField: React.FC<{ label: string; type?: string; value: any; onChange: (value: string) => void; className?: string }> = ({ label, type = "text", value, onChange, className }) => (
    <FieldWrapper label={label} className={className}>
        <input type={type} value={value || ""} onChange={(e) => onChange(e.target.value)} />
    </FieldWrapper>
);

const SettingMetaBox: React.FC<SettingMetaBoxProps> = ({ formField, inputTypeList, onChange, onTypeChange, opened }) => {
    const [hasOpened, setHasOpened] = useState(opened.click);

    const isValidSiteKey = (key: string) => /^6[0-9A-Za-z_-]{39}$/.test(key);
    const [isSiteKeyEmpty, setIsSiteKeyEmpty] = useState(formField.type === "recaptcha" && !isValidSiteKey(formField.sitekey || ""));

    useEffect(() => {
        if (formField.type === "recaptcha") {
            onChange("disabled", isSiteKeyEmpty);
        }
    }, [isSiteKeyEmpty]);

    useEffect(() => {
        setHasOpened(opened.click);
    }, [opened]);

    const renderConditionalFields = () => {
        switch (formField.type) {
            case "text":
            case "email":
            case "url":
            case "textarea":
                return (
                    <>
                        <InputField label="Placeholder" value={formField.placeholder || ""} onChange={(value) => onChange("placeholder", value)} />
                        <InputField label="Character Limit" type="number" value={formField.charlimit || ""} onChange={(value) => onChange("charlimit", parseInt(value) || 0)} />
                        {formField.type === "textarea" && (
                            <>
                                <InputField label="Row" type="number" value={formField.row || ""} onChange={(value) => onChange("row", parseInt(value) || 0)} />
                                <InputField label="Column" type="number" value={formField.column || ""} onChange={(value) => onChange("column", parseInt(value) || 0)} />
                            </>
                        )}
                    </>
                );
            case "recaptcha":
                return (
                    <>
                        <InputField label="Site Key" value={formField.sitekey || ""} className={isSiteKeyEmpty ? "highlight" : ""} onChange={(value) => {
                            onChange("sitekey", value);
                            setIsSiteKeyEmpty(!isValidSiteKey(value));
                        }} />
                        <p>
                            Register your site with your Google account to obtain the{" "}
                            <a href="https://www.google.com/recaptcha" target="_blank" rel="noopener noreferrer">
                                reCAPTCHA script
                            </a>.
                        </p>
                    </>
                );
            case "attachment":
                return <InputField label="Maximum File Size" type="number" value={formField.filesize || ""} onChange={(value) => onChange("filesize", parseInt(value) || 0)} />;
            default:
                return null;
        }
    };

    return (
        <div onClick={() => setHasOpened((prevState) => !prevState)}>
            <i className="admin-font adminLib-menu"></i>
            {hasOpened && (
                <Draggable>
                    <section className="meta-setting-modal">
                        <button className="meta-setting-modal-button" onClick={(event) => {
                            event.stopPropagation();
                            setHasOpened(false);
                        }}>
                            <i className="admin-font adminLib-cross"></i>
                        </button>
                        <main className="meta-setting-modal-content">
                            <h3>Input Field Settings</h3>
                            <div className="setting-modal-content-section">
                                <FormFieldSelect inputTypeList={inputTypeList} formField={formField} onTypeChange={onTypeChange} />
                                <InputField label="Name" value={formField.name} onChange={(value) => onChange("name", value)} />
                                {renderConditionalFields()}
                            </div>
                            <div className="setting-modal-content-section">
                                <FieldWrapper label="Visibility">
                                    <div className="visibility-control-container">
                                        <div className="tabs">
                                            <input checked={formField.type === "recaptcha" ? !isSiteKeyEmpty : !formField.disabled} onChange={(e) => onChange("disabled", !e.target.checked)} type="radio" id="visible" name="tabs" />
                                            <label className="tab" htmlFor="visible">Visible</label>

                                            <input checked={formField.type === "recaptcha" ? isSiteKeyEmpty : formField.disabled} onChange={(e) => onChange("disabled", e.target.checked)} type="radio" id="hidden" name="tabs" />
                                            <label className="tab" htmlFor="hidden">Hidden</label>

                                            <span className="glider" />
                                        </div>
                                    </div>
                                </FieldWrapper>
                                <FieldWrapper label="Required">
                                    <input type="checkbox" checked={formField.required || false} onChange={(e) => onChange("required", e.target.checked)} />
                                </FieldWrapper>
                            </div>
                        </main>
                    </section>
                </Draggable>
            )}
        </div>
    );
};

export default SettingMetaBox;
