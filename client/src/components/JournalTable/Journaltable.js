import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import "./JournalTable.css";
import moment from 'moment';

const columns = [
    {
        Header: '',
        id: 'edit',
        accessor: 'id',
        Cell: row => (
            <div>
                <button className="btn btn-success" onClick={(() => console.log("THis IS THE DELETE BUTTON and "))} >Del</button>
            </div>
        ),
        width: 60
    },
    {
        Header: 'Date',
        id: 'date',
        headerStyle: { textAlign: 'left' },
        width: 93,
        accessor: d => {
            return moment(d.date)
                .local()
                .format("MMMM D, YYYY")
        }
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
        accessor: 'description',
        headerStyle: { textAlign: 'left' },
        // style: { 'whiteSpace': 'unset' },
        width: 250
    },
    {
        Header: '',
        id: 'edit',
        accessor: 'id',
        Cell: row => (
            <div>
                <button className="btn btn-success" onClick={(() => console.log("THis IS THE EDIT BUTTON and "))} >Edit</button>
            </div>
        ),
        width: 60
    }
]

class JournalTable extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div><ReactTable
                data={this.props.journalData}
                columns={columns}
                defaultPageSize={5}
            />
            </div>
        )
    };
}

export default JournalTable;
