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
            editRow: null,
            data: {
                date: "date",
                title: "title",
                description: "description"
            }
        }
        this.renderEditable = this.renderEditable.bind(this);

    }

    handleEditClick = (index) => {
        this.setState({ editRow: index })
    }

    renderEditable(cellInfo) {
        return (
            <div
                style={{ backgroundColor: "#fafafa", color: "#000000" }}
                contentEditable
                suppressContentEditableWarning
                onBlur={e => {
                    const data = this.props.journalData;
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    console.log({data})
                }}
                dangerouslySetInnerHTML={{
                    __html: this.props.journalData[cellInfo.index][cellInfo.column.id]
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
        const childProps = {editRow:editRow, handleEditClick: this.handleEditClick, handleSaveClick:this.handleSaveClick, contentEditable: this.contentEditable, renderEditable: this.renderEditable}
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
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.date}`,
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
                width: 100,
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.title}`
            },
            {
                Header: 'Notes',
                accessor: 'description',
                headerStyle: { textAlign: 'left' },
                // style: { 'whiteSpace': 'unset' },
                width: 250,
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.description}`,
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
