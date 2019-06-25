import React from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import "./JournalTable.css";


const data = [{
    button: <button className="btn btn-success">Edit</button>,
    date: '05/22/2019',
    title: <p>We had a great day today. </p>,
    notes: <p>The day started with an early morning walk to the park. The sun was still coming up, casting an eerie light on the river making the occasional patch of fog glow. Little Alfred was fascinated by the birds flying overhead - I wonder if he'll grow up to be an ornithologist! </p>
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
    width: 100
},
{
    Header: 'Title',
    accessor: 'title',
    headerStyle: { textAlign: 'left' },
    width: 200
},
{
    Header: 'Notes',
    accessor: 'notes',
    headerStyle: { textAlign: 'left' },
    style: { 'whiteSpace': 'unset' },
    width: 700

}]



function JournalTable() {
    return <ReactTable
        data={data}
        columns={columns}
    />

}

export default JournalTable;