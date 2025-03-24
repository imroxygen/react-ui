import React from "react";

interface SectionProps {
    formField: { label: string };
    onChange: (field: string, value: string) => void;
}

const Section: React.FC<SectionProps> = ({ formField, onChange }) => {
    return (
        <div className="main-input-wrapper">
            {/* Render label */}
            <input
                className="input-label textArea-label"
                type="text"
                value={formField.label}
                placeholder="I am label"
                onChange={(event) => onChange("label", event.target.value)}
            />
        </div>
    );
};

export default Section;
