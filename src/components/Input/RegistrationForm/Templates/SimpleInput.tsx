import { __ } from "@wordpress/i18n";
import React from "react";

interface SelectOption {
    value : string;
    label : string;
    icon?: string;
}
interface ElementsProps {
    selectOptions: SelectOption[];
    onClick :( value : string) => void;
}
const Elements: React.FC<ElementsProps> = ( {
    selectOptions,
    onClick
} ) => {

    return (
        <>
            <aside className='elements-section'>
                <div className='section-meta'>
                    <h2>{__("Form fields", "catalogx")}</h2>
                </div>
                <main className='section-container'>
                    {
                        selectOptions.map((option) => (
                            <article
                                className='elements-items'
                                onClick={(event) => onClick(option.value)}
                            >
                                <i className={` ${option.icon}`}></i>
                                <p className='list-title'>{option.label}</p>
                            </article>
                        ))
                    }
                </main>
            </aside>
        </>
    )
  }
  export default Elements