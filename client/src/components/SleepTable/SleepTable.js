import React from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const data = [{
    date: '',
    start: '',
    end: '',
    observations: <p>The day started with an early morning walk to the park.</p>
}]

const columns = [
    {
        Header: '',
        Cell: ({ value }) => (<button className="btn btn-success">Edit</button>),
        width: 70
    },
    {
        Header: 'Date',
        accessor: 'date',
        headerStyle: { textAlign: 'left' },
        width: 93
    },
    {
        Header: 'Start',
        accessor: 'start',
        headerStyle: { textAlign: 'left' },
        width: 80
    },
    {
        Header: 'End',
        accessor: 'end',
        headerStyle: { textAlign: 'left' },
        width: 80
    },
    {
        Header: 'Observations',
        accessor: 'observations',
        headerStyle: { textAlign: 'left' },
        style: { 'whiteSpace': 'unset' },
        width: 250
    }]



function Sleep() {
    return <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={5}
    />
}

export default Sleep;