import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import "./JournalTable.css";

const Row = ({ id, date, title, notes }) => (
    <div className="row">
        <div>{id}</div>
        <div>{date}</div>
        <div>{title}</div>
        <div>{notes}</div>
    </div>
);

const data = [{
    button: <button className="btn btn-success">Edit</button>,
    date: '05/22/2019',
    title: <p className="notesText">Great Day! </p>,
    notes: <p className="notesText">The day started with an early morning walk to the park. The sun was still coming up, casting an eerie light on the river making the occasional patch of fog glow. Little Alfred was fascinated by the birds flying overhead - I wonder if he'll grow up to be an ornithologist! </p>
}]

const columns = [{
    header: '',
    id: 'edit',
    accessor: '[row identifier to be passed to button]',
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
    Header: 'Title',
    accessor: 'title',
    headerStyle: { textAlign: 'left' },
    // style: { 'whiteSpace': 'unset' },
    width: 100
},
{
    Header: 'Notes',
    accessor: 'notes',
    headerStyle: { textAlign: 'left' },
    // style: { 'whiteSpace': 'unset' },
    width: 250
}]

function JournalTable(props) {
    return <ReactTable
        data={props.data}
        columns={columns}
        defaultPageSize={5}
    />

}

export default JournalTable;

// const data1 = [{
//     button: <button className="btn btn-success">Edit</button>,
//     date: '05/22/2019',
//     title: <p className="notesText">Great Day! </p>,
//     notes: <p className="notesText">The day started with an early morning walk to the park. The sun was still coming up, casting an eerie light on the river making the occasional patch of fog glow. Little Alfred was fascinated by the birds flying overhead - I wonder if he'll grow up to be an ornithologist! </p>
// }]

// const columns = [{
//     header: '',
//     id: 'edit',
//     accessor: '[row identifier to be passed to button]',
//     Cell: ({ value }) => (<button className="btn btn-success">Edit</button>),
//     width: 70
// },
// {
//     Header: 'Date',
//     accessor: 'date',
//     headerStyle: { textAlign: 'left' },
//     width: 93
// },
// {
//     Header: 'Title',
//     accessor: 'title',
//     headerStyle: { textAlign: 'left' },
//     // style: { 'whiteSpace': 'unset' },
//     width: 100
// },
// {
//     Header: 'Notes',
//     accessor: 'notes',
//     headerStyle: { textAlign: 'left' },
//     // style: { 'whiteSpace': 'unset' },
//     width: 250
// }]



