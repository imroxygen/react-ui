import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
interface Option {
    value: string;
    label: string;
    isdefault: boolean;
}

interface OptionMetaBoxProps {
    option: Option;
    onChange: (field: keyof Option, value: any) => void;
    setDefaultValue: () => void;
    hasOpen: boolean;
}

const OptionMetaBox: React.FC<OptionMetaBoxProps> = ({ option, onChange, setDefaultValue, hasOpen }) => {
    const [hasOpened, setHasOpened] = useState<boolean>(hasOpen);

    useEffect(() => {
        setHasOpened(hasOpen);
    }, [hasOpen]);

    return (
        <div 
            onClick={(event) => {
                setHasOpened(true);
                event.stopPropagation();
            }}
        >
            <i className="admin-font adminLib-menu"></i>
            {hasOpened && (
                <Draggable>
                    <section className="meta-setting-modal">
                        {/* Close button */}
                        <button
                            className="meta-setting-modal-button"
                            onClick={(event) => {
                                event.stopPropagation();
                                setHasOpened(false);
                            }}
                        >
                            <i className="admin-font adminLib-cross"></i>
                        </button>
                        
                        {/* Main Content */}
                        <main className="meta-setting-modal-content">
                            <h3>Input Field Settings</h3>

                            <div className="setting-modal-content-section">
                                {/* Input Field for Value */}
                                <article className="modal-content-section-field">
                                    <p>Value</p>
                                    <input
                                        type="text"
                                        value={option.value}
                                        onChange={(e) => onChange("value", e.target.value)}
                                    />
                                </article>

                                {/* Input Field for Label */}
                                <article className="modal-content-section-field">
                                    <p>Label</p>
                                    <input
                                        type="text"
                                        value={option.label}
                                        onChange={(e) => onChange("label", e.target.value)}
                                    />
                                </article>
                            </div>

                            {/* Checkbox for Setting Default */}
                            <div className="setting-modal-content-section">
                                <article className="modal-content-section-field">
                                    <p>Set default</p>
                                    <input
                                        type="checkbox"
                                        checked={option.isdefault}
                                        onChange={() => setDefaultValue()}
                                    />
                                </article>
                            </div>
                        </main>
                    </section>
                </Draggable>
            )}
        </div>
    );
}

export default OptionMetaBox;
