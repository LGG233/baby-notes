import React from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const data = [{
    start: '10:00 PM',
    end: '4:00 PM',
    date: '05/22/2019',
    observations: <p>some notes</p>
}]

const columns = [
    {
        Header: 'Date',
        accessor: 'date',
        width: 93
    },
    {
        Header: 'Start',
        accessor: 'start',
        width: 80
    },
    {
        Header: 'End',
        accessor: 'end',
        width: 80
    },
    {
        Header: 'Observations',
        accessor: 'observations',
        width: 700
    }]



function TableRend() {
    return <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={5}
    />
}

export default TableRend;