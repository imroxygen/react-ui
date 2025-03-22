import React, { ChangeEvent } from "react";

export interface CheckboxCustomImgProps {
    wrapperClass?:string,
    syncDirectionsClass?:string,
    syncMetaClass?:string,
    settingsMetaDescriptionClass?:string,
    labelClass?:string,
    value?: string[];
    onChange: (updatedValue: string[]) => void;
    syncDirections: {
        value: string;
        img1: string;
        img2: string;
        label: string;
    }[];
    description?: string;
    proSetting?: boolean;
}

export const CheckboxCustomImg: React.FC<CheckboxCustomImgProps> = ({
    wrapperClass,
    syncDirectionsClass,
    syncMetaClass,
    labelClass,
    settingsMetaDescriptionClass,
    value = [],
    onChange,
    syncDirections,
    description,
    proSetting,
}) => {
    const handleCheckboxChange = (directionValue: string, isChecked: boolean) => {
        let updatedValue = value.filter((element) => element !== directionValue);

        if (isChecked) {
            updatedValue = [...updatedValue, directionValue];
        }

        onChange(updatedValue);
    };

    return (
        <>
            <div className={wrapperClass}>
                {syncDirections.map((direction, index) => (
                    <div className={syncDirectionsClass} key={index}>
                        <input
                            type="checkbox"
                            checked={value.includes(direction.value)}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleCheckboxChange(direction.value, e.target.checked)
                            }
                        />
                        <div className={syncMetaClass}>
                            <img src={direction.img1} alt="" />
                            <i className="admin-font adminLib-arrow-right"></i>
                            <img src={direction.img2} alt="" />
                        </div>
                        <p className={labelClass}>{direction.label}</p>
                    </div>
                ))}

                {/* Render the pro tag if needed */}
                {proSetting && <span>pro</span>}
            </div>

            {/* Render the description if provided */}
            {description && (
                <p
                    className={settingsMetaDescriptionClass}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            )}
        </>
    );
};

export default CheckboxCustomImg;
