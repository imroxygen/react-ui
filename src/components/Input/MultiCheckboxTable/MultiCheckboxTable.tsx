import React, { useState, useEffect, useRef } from 'react';
// import Modal from 'react-modal';
import './MultiCheckboxTable.scss';

interface Option {
    label: string;
    value: string;
}

interface SelectedOptionDisplayProps {
    selectedValues: Option[];
    clearSelectedValues: () => void;
    removeSelectedValues: (value: Option) => void;
    setPopupOpend: (open: boolean) => void;
    popupOpend: boolean;
}

const SelectedOptionDisplay: React.FC<SelectedOptionDisplayProps> = ({ selectedValues, clearSelectedValues, removeSelectedValues, setPopupOpend, popupOpend }) => {
    const renderableSelectedValues = popupOpend ? selectedValues : selectedValues.slice(0, 1);

    return (
        <div className='selected-container'>
            <div className='selected-items-container'>
                {renderableSelectedValues.map((value) => (
                    <div className='selected-items' key={value.value}>
                        <span>{value.label}</span>
                        <div onClick={() => removeSelectedValues(value)}>
                            <i className='admin-font adminLib-close'></i>
                        </div>
                    </div>
                ))}
            </div>

            <div className='container-items-controls'>
                {!popupOpend && selectedValues.length > 1 && (
                    <div className='open-modal items-controls' onClick={() => setPopupOpend(true)}>
                        +{Math.min(selectedValues.length - 1)}
                    </div>
                )}
                <div className='clear-all-data items-controls' onClick={clearSelectedValues}>
                    <i className='admin-font adminLib-close'></i>
                </div>
            </div>
        </div>
    );
};

interface SearchOptionDisplayProps {
    options: Option[];
    filter: string;
    setFilter: (value: string) => void;
    insertSelectedValues: (value: Option) => void;
    searchStarted: boolean;
}

const SearchOptionDisplay: React.FC<SearchOptionDisplayProps> = ({ options, filter, setFilter, insertSelectedValues, searchStarted }) => {
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const closeModal = () => setModalOpen(false);
        document.addEventListener('click', closeModal);
        return () => document.removeEventListener('click', closeModal);
    }, []);

    return (
        <>
            <div className='selected-input'>
                <input
                    placeholder='Select...'
                    value={filter}
                    onChange={(event) => {
                        setModalOpen(true);
                        setFilter(event.target.value);
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setModalOpen(true);
                    }}
                />
                <span>
                    <i className='admin-font adminLib-keyboard-arrow-down'></i>
                </span>
            </div>

            {modalOpen && (
                <div className='option-container'>
                    {!searchStarted &&
                        options.map((option) => (
                            <div key={option.value} className='options-item' onClick={() => {
                                insertSelectedValues(option);
                                setModalOpen(false);
                            }}>
                                {option.label}
                            </div>
                        ))}
                    {searchStarted && <div>Searching...</div>}
                </div>
            )}
        </>
    );
};

interface SelectProps {
    values: Option[];
    onChange: (values: Option[]) => void;
    option: Option[];
    asyncGetOptions?: (filter: string) => Promise<Option[]>;
    asyncFetch?: boolean;
    isMulti?: boolean;
}

const Select: React.FC<SelectProps> = ({ values = [], onChange, option = [], asyncGetOptions, asyncFetch = false, isMulti = true }) => {
    const [selectedValues, setSelectedValues] = useState<Option[]>(values);
    const [options, setOptions] = useState<Option[]>(option);
    const [popupOpend, setPopupOpend] = useState(false);
    const [searchStarted, setSearchStarted] = useState(false);
    const [filter, setFilter] = useState('');
    const settingChanged = useRef(false);

    useEffect(() => {
        const fetchOptions = async () => {
            let allOptions = option;
            if (asyncFetch && asyncGetOptions) {
                setSearchStarted(true);
                allOptions = await asyncGetOptions(filter);
                setSearchStarted(false);
            }
            setOptions(allOptions.filter(o => !selectedValues.some(s => s.value === o.value)));
        };
        fetchOptions();
    }, [filter, option, selectedValues]);

    useEffect(() => {
        if (settingChanged.current) {
            settingChanged.current = false;
            onChange(selectedValues);
        }
    }, [selectedValues]);

    return (
        <>
            <SelectedOptionDisplay
                popupOpend={popupOpend}
                setPopupOpend={setPopupOpend}
                selectedValues={selectedValues}
                clearSelectedValues={() => setSelectedValues([])}
                removeSelectedValues={(value) => setSelectedValues(prev => prev.filter(v => v.value !== value.value))}
            />

            <SearchOptionDisplay
                options={options}
                filter={filter}
                setFilter={setFilter}
                insertSelectedValues={(value) => setSelectedValues(prev => [...prev, value])}
                searchStarted={searchStarted}
            />
        </>
    );
};

export interface MultiCheckboxTableProps {
    rows: { key: string; label: string; options?: Option[] }[];
    columns: { key: string; label: string; moduleEnabled?: string }[];
    onChange: (key: string, value: any) => void;
    setting: Record<string, any>;
    proSetting?: boolean;
    modules: string[];
    moduleChange?: (module: string) => void;
}

const MultiCheckboxTable: React.FC<MultiCheckboxTableProps> = ({ rows, columns, onChange, setting, proSetting, modules, moduleChange }) => {
    return (
        <table className='grid-table'>
            <thead>
                <tr>
                    <th></th>
                    {columns.map((col) => <th key={col.key}>{col.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.key}>
                        <td>{row.label}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MultiCheckboxTable;
