import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import "./JournalTable.css";
import moment from 'moment';
import { EditButton } from "../Button/EditButton";

class JournalTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editRow: null
        }
    }

    handleEditClick = (index) => {
        this.setState({editRow: index})
    }

    handleSaveClick=()=>{
        console.log('Save Function in parent');
        this.setState({editRow: null})
    }

    render() {
        const editRow = this.state.editRow;
        const childProps = {editRow:editRow, handleEditClick: this.handleEditClick, handleSaveClick:this.handleSaveClick}
        const columns = [
            {
                Header: '',
                id: 'edit',
                accessor: 'id',
                Cell: ({ index }) => (<EditButton index={index} {...childProps} />),
                width: 70
            },
            {
                Header: 'Date',
                id: 'date',
                headerStyle: { textAlign: 'left' },
                width: 93,
                accessor: d => {
                    return moment(d.date)
                        .local()
                        .format("MMM D, YY")
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
            }
        ]
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
