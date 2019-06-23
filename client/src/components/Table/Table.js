import React from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';


const data = [{
    id: '1',
    start: '10:00 PM',
    end: '4:00 PM',
    date: '05/22/2019',
    notes: <p>some notes</p>
}]

const columns = [{
    Header: 'ID',
    accessor: 'id'
},
{
    Header: 'Start',
    accessor: 'start'
},
{
    Header: 'End',
    accessor: 'end'
},
{
    Header: 'Date',
    accessor: 'date'
},
{
    Header: 'Notes',
    accessor: 'notes'
}]



function Table() {
    return <ReactTable
        data={data}
        columns={columns}
    />
}

export default Table;