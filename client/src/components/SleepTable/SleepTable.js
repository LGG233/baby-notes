import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import { EditButton } from "../Button/EditButton";

class Sleeping extends Component {
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
                accessor: '[row identifier to be passed to button]',
                Cell: ({index}) => (<EditButton index={index} {...childProps} />),
                width: 70
            },
            {
                Header: 'Date',
                id: "date",
                headerStyle: { textAlign: 'left' },
                width: 93,
                accessor: d => {
                    return moment(d.date)
                        .local()
                        .format("MMM D, YY")
                }
            },
            {
                Header: 'Start',
                id: 'starttime',
                headerStyle: { textAlign: 'left' },
                width: 80,
                accessor: t => {
                    return moment(t.starttime, "HH:mm")
                        .format("h:mm a")
                }
            },
            {
                Header: 'End',
                id: 'endtime',
                headerStyle: { textAlign: 'left' },
                width: 80,
                accessor: t => {
                    return moment(t.endtime, "HH:mm")
                        .format("h:mm a")
                }
            },
            {
                Header: 'Observations',
                accessor: 'description',
                headerStyle: { textAlign: 'left' },
                style: { 'whiteSpace': 'unset' },
                width: 250
            }]
        return (
            <div><ReactTable
                data={this.props.sleepingData}
                columns={columns}
                defaultPageSize={5}
                />
            </div>
        )
    };
}
export default Sleeping;