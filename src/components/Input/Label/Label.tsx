import React from "react";

interface LabelProps {
    wrapperClass?: string;
    value: string;
    descClass?: string;
    description?: string;
}

const Label: React.FC<LabelProps> = ({ wrapperClass, value, descClass, description }) => {
    return (
        <div className={wrapperClass}>
            <label>{value}</label>
            {description && <p className={descClass}>{description}</p>}
        </div>
    );
}

export default Label;
