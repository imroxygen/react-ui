import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

interface Option {
    label: string;
    value: string;
    isdefault?: boolean;
}

interface OptionMetaBoxProps {
    option: Option;
    onChange: (key: keyof Option, value: string | boolean) => void;
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
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
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
                            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                event.stopPropagation();
                                setHasOpened(false);
                            }}
                        >
                            <i className="admin-font adminLib-cross"></i>
                        </button>

                        {/* Modal Content */}
                        <main className="meta-setting-modal-content">
                            <h3>Input Field Settings</h3>

                            <div className="setting-modal-content-section">
                                {/* Input Value */}
                                <article className="modal-content-section-field">
                                    <p>Value</p>
                                    <input
                                        type="text"
                                        value={option.value}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onChange("value", e.target.value)
                                        }
                                    />
                                </article>

                                {/* Input Label */}
                                <article className="modal-content-section-field">
                                    <p>Label</p>
                                    <input
                                        type="text"
                                        value={option.label}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            onChange("label", e.target.value)
                                        }
                                    />
                                </article>
                            </div>

                            {/* Set Default Option */}
                            <div className="setting-modal-content-section">
                                <article className="modal-content-section-field">
                                    <p>Set default</p>
                                    <input
                                        type="checkbox"
                                        checked={option.isdefault || false}
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
};

export default OptionMetaBox;
