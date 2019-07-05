import React from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const data = [{
<<<<<<< HEAD
    date: '',
    start: '',
    end: '',
    observations: <p>Jimmy ate a lot more today</p>
=======
    date: '05/22/2019',
    start: '10:00 PM',
    end: '4:00 PM',
    date: '05/22/2019',
    observations: <p className="notesText">Jimmy ate a lot more today</p>
>>>>>>> c328111601ffd613e4c6ca6d3b3992d3a3087a58
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



function Feeding() {
    return <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={5}
    />
}

export default Feeding;