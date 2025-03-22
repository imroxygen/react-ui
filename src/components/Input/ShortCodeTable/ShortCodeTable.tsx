import React from 'react';
import './ShortCodeTable.scss';

interface Option {
    label: string;
    desc: string;
}

export interface ShortCodeTableProps {
    wrapperClass?: string;
    descClass?: string;
    description?: string;
    options: Option[];
    optionLabel?: string[];
}

const ShortCodeTable: React.FC<ShortCodeTableProps> = ({
    wrapperClass = '',
    descClass = '',
    description = '',
    options,
    optionLabel = [],
}) => {
    return (
        <main className={wrapperClass}>
            <table className='shortcode-table'>
                <thead>
                    <tr>
                        {optionLabel.map((label, index) => (
                            <th key={index}>{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {options.map((option, index) => (
                        <tr key={index}>
                            <td><code>{option.label}</code></td>
                            <td>{option.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {description && (
                <p className={descClass} dangerouslySetInnerHTML={{ __html: description }} />
            )}
        </main>
    );
};

export default ShortCodeTable;
