import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import "./JournalTable.css";

const columns = [{
    header: '',
    id: 'edit',
    accessor: 'id',
    Cell: ({ value }) => (<button className="btn btn-success" onClick={(() => console.log("THis IS THE EDIT BUTTON and "))} >Edit</button>),
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
    accessor: 'description',
    headerStyle: { textAlign: 'left' },
    // style: { 'whiteSpace': 'unset' },
    width: 250
}]

class JournalTable extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ReactTable
                    data={this.props.journalData}
                    columns={columns}
                    defaultPageSize={5}
                />
            </div>

        )
    };
}

export default JournalTable;
