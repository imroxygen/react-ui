import React, { useState, useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import "./table.scss";

const PENALTY = 28;
const COOLDOWN = 1;

interface TableCellProps {
    value?: string;
    title?: string;
    children?: React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ value, title, children }) => {
    return (
        <div title={value} className="order-status table-row-custom">
            <h4 className="hide-title">{title}</h4>
            {children}
        </div>
    );
};

export interface CustomTableProps {
    data: any[] | null;
    columns: any[];
    selectable?: boolean;
    handleSelect?: (selectedRows: any[], selectedCount: number, allSelected: boolean) => void;
    handlePagination?: (rowsPerPage: number, currentPage: number, filterData: Record<string, any>) => void;
    defaultRowsParPage?: number;
    defaultCurrentPage?: number;
    defaultTotalRows: number;
    perPageOption: number[];
    realtimeFilter?: { name: string; render: (handleFilterChange: (key: string, value: any) => void, value: any) => JSX.Element }[];
    autoLoading?: boolean;
    typeCounts?: { key: string; name: string; count: number }[];
    bulkActionComp?: () => JSX.Element;
    handleMouseEnter?: () => void;
    handleMouseLeave?: () => void;
}

const CustomTable: React.FC<CustomTableProps> = (props) => {
    const {
        data,
        columns,
        selectable,
        handleSelect,
        handlePagination,
        defaultRowsParPage = 10,
        defaultCurrentPage = 1,
        defaultTotalRows,
        perPageOption,
        realtimeFilter,
        autoLoading,
        typeCounts,
        bulkActionComp,
    } = props;

    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(defaultTotalRows);
    const [rowsPerPage, setRowsPerPage] = useState(defaultRowsParPage);
    const [currentPage, setCurrentPage] = useState(defaultCurrentPage);
    const [filterData, setFilterData] = useState<Record<string, any>>({});
    const counter = useRef<number>(0);
    const counterId = useRef<NodeJS.Timeout | null>(null);

    const handlePageChange = (newCurrentPage: number) => {
        setLoading(true);
        handlePagination?.(rowsPerPage, newCurrentPage, filterData);
        setCurrentPage(newCurrentPage);
    };

    const handleRowsPerPageChange = (newRowsPerPage: number) => {
        setLoading(true);
        handlePagination?.(newRowsPerPage, currentPage, filterData);
        setCurrentPage(1);
        setRowsPerPage(newRowsPerPage);
    };

    const handleOnSelectedRowsChange = ({ selectedRows, selectedCount, allSelected }: { selectedRows: any[]; selectedCount: number; allSelected: boolean }) => {
        handleSelect?.(selectedRows, selectedCount, allSelected);
    };

    useEffect(() => {
        setTotalRows(defaultTotalRows);
        setLoading(data === null);
    }, [data, defaultTotalRows]);

    return (
        <div className={`table-container ${loading ? "table-loading" : ""} ${selectable ? "selectable-table" : ""}`}>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <DataTable
                    pagination
                    paginationServer
                    selectableRows={selectable}
                    columns={columns}
                    data={data || []}
                    paginationTotalRows={totalRows}
                    paginationDefaultPage={currentPage}
                    paginationPerPage={rowsPerPage}
                    paginationRowsPerPageOptions={perPageOption}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleRowsPerPageChange}
                    onSelectedRowsChange={handleOnSelectedRowsChange}
                />
            )}
        </div>
    );
};

export default CustomTable;
