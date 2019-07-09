import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import { EditButton } from "../Button/EditButton";

class Feeding extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editRow: null,
            data: {
                id: 0,
                date: "date",
                starttime: "starttime",
                endtime: "endtime",
                description: "description"
            }
        }
        this.renderEditable = this.renderEditable.bind(this);
    }

    handleEditClick = (index) => {
        this.setState({ editRow: index });
    }

    updateParentState = (updatedArray) => {
        this.setState({oldArrayName : updatedArray })
    }

    renderEditable(cellInfo) {
        return (
            <div
                style={{ backgroundColor: "#fafafa", color: "#000000" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    let data = [this.props.eatingData];
                    data[cellInfo.index][cellInfo.column.id] = 'e.target.innerHTML';
                    this.props.updateParentState(data);
                    console.log({data})
                }}
                dangerouslySetInnerHTML={{
                    __html: this.state.data
                }}
                onInput={(e) => console.log(e.target.innerHTML)}
            />
        );
    }

    handleSaveClick = () => {
        this.setState({ editRow: null, data: this.state.data })
        console.log(this.state.data)
    }

    render() {
        const editRow = this.state.editRow;
        const childProps = { editRow: editRow, handleEditClick: this.handleEditClick, handleSaveClick: this.handleSaveClick, contentEditable: this.contentEditable, renderEditable: this.renderEditable }
        const columns = [
            {
                Header: '',
                id: 'edit',
                accessor: '[row identifier to be passed to button]',
                Cell: ({ index }) => (<EditButton index={index} {...childProps} />),
                width: 70
            },
            {
                Header: 'Date',
                id: 'date',
                headerStyle: { textAlign: 'left' },
                width: 93,
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.date}`,
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
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.starttime}`,
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
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.endtime}`,
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
                width: 250,
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.description}`
            }]
        return (
            <div><ReactTable
                data={this.props.eatingData}
                columns={columns}
                defaultPageSize={5}
            />
            </div>
        )
    };
}

export default Feeding;