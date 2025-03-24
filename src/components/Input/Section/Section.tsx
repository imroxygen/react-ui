import React from "react";

interface SectionProps {
    wrapperClass?: string;
    value?: string;
    hint?: string;
}

const Section: React.FC<SectionProps> = ({ wrapperClass, value, hint }) => {
    return (
        <div className={wrapperClass}>
            {value && <span>{value}</span>}
            {hint && <p className="section-hint" dangerouslySetInnerHTML={{ __html: hint }}></p>}
        </div>
    );
}

export default Section;
