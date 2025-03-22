import React, { useState, useEffect } from "react";

// Define the interface before the component
interface HoverInputRenderProps {
    label: string;
    placeholder: string;
    onLabelChange: (newLabel: string) => void;
    renderStaticContent: (props: { label: string; placeholder: string }) => JSX.Element;
    renderEditableContent: (props: { label: string; onLabelChange: (newLabel: string) => void; placeholder: string }) => JSX.Element;
}

const HoverInputRender: React.FC<HoverInputRenderProps> = ({
    label,
    placeholder,
    onLabelChange,
    renderStaticContent,
    renderEditableContent,
}) => {
    const [showTextBox, setShowTextBox] = useState<boolean>(false);
    const [isClicked, setIsClicked] = useState<boolean>(false);
    let hoverTimeout: NodeJS.Timeout | null = null;

    useEffect(() => {
        const closePopup = (event: MouseEvent) => {
            if ((event.target as HTMLElement).closest(".meta-setting-modal, .react-draggable")) {
                return;
            }
            setIsClicked(false);
            setShowTextBox(false);
        };

        document.body.addEventListener("click", closePopup);
        return () => {
            document.body.removeEventListener("click", closePopup);
        };
    }, []);

    const handleMouseEnter = () => {
        hoverTimeout = setTimeout(() => setShowTextBox(true), 300);
    };

    const handleMouseLeave = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        if (!isClicked) setShowTextBox(false);
    };

    return (
        <>
            {!showTextBox && (
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: "pointer" }}
                >
                    {renderStaticContent({ label, placeholder })}
                </div>
            )}
            {showTextBox && (
                <div
                    className="main-input-wrapper"
                    onClick={() => setIsClicked(true)}
                    onMouseLeave={handleMouseLeave}
                >
                    {renderEditableContent({ label, onLabelChange, placeholder })}
                </div>
            )}
        </>
    );
};

export default HoverInputRender;
