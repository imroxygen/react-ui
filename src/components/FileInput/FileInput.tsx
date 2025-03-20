import React, { ChangeEvent, MouseEvent, FocusEvent } from "react";

export interface FileInputProps {
    wrapperClass?: string;
    inputClass?: string;
    id?: string;
    type?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onMouseOver?: (e: MouseEvent<HTMLInputElement>) => void;
    onMouseOut?: (e: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    proSetting?: boolean;
    imageSrc?: string;
    imageWidth?: number | string;
    imageHeight?: number | string;
    buttonClass?: string;
    onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    openUploader?: string;
    description?: string;
    descClass?: string;
}

const FileInput: React.FC<FileInputProps> = (props) => {
    return (
        <div className={props.wrapperClass}>
            <div className="file-uploader">
                <input
                    className={props.inputClass}
                    id={props.id}
                    type={props.type || "file"}
                    name={props.name || "file-input"}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={(e) => props.onChange?.(e)}
                    onClick={(e) => props.onClick?.(e)}
                    onMouseOver={(e) => props.onMouseOver?.(e)}
                    onMouseOut={(e) => props.onMouseOut?.(e)}
                    onFocus={(e) => props.onFocus?.(e)}
                />
                {props.proSetting && <span className="admin-pro-tag">pro</span>}
                {props.imageSrc && (
                    <img
                        src={props.imageSrc}
                        width={props.imageWidth}
                        height={props.imageHeight}
                        alt="Uploaded Preview"
                    />
                )}
                <button
                    className={props.buttonClass}
                    type="button"
                    onClick={(e) => props.onButtonClick?.(e)}
                >
                    {props.openUploader}
                </button>
            </div>
            {props.description && (
                <p
                    className={props.descClass}
                    dangerouslySetInnerHTML={{ __html: props.description }}
                />
            )}
        </div>
    );
};

export default FileInput;
