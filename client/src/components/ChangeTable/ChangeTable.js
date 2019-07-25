import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Moment from 'moment';
import { EditButton } from "../Button/EditButton";
import '../../util/API';
import API from "../../util/API";

class Change extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editRow: null,
            data: {
                id: "",
                date: "",
                starttime: "",
                endtime: "",
                description: ""
            }
        }
        this.renderEditable = this.renderEditable.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
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
                    const data = this.props.diaperData;
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    console.log({ data })
                }}
                dangerouslySetInnerHTML={{
                    __html: this.props.diaperData[cellInfo.index][cellInfo.column.id]
                }}
                onInput={(e) => console.log(e.target.innerHTML)}
            />
        );
    }

    handleSaveClick = (id) => {
        console.log('id to save:' + id)
        const editedItem = this.props.diaperData.find((item) => item.id === id);
        console.log(editedItem)
        API.putOneActivity(id, editedItem)
        this.setState({ editRow: null })
    }

    deleteRow(id) {
        console.log("id: " + id);
        this.deleteOneRow(id);
    }

    deleteOneRow = (id) => {
        API.deleteOneActivity(id)
            .then(window.location.replace("/child"))
            .catch(err => console.log(err))
    }

    render() {
        const editRow = this.state.editRow;
        const childProps = { editRow: editRow, handleEditClick: this.handleEditClick, handleSaveClick: this.handleSaveClick, contentEditable: this.contentEditable, renderEditable: this.renderEditable }
        const columns = [
            // {
            //     Header: '',
            //     id: 'edit',
            //     accessor: '[row identifier to be passed to button]',
            //     Cell: (row) => <EditButton myId={row.original.id} index={row.index} {...childProps} />,
            //     width: 80,
            //     sortable: false
            // },
            {
                Header: 'Date',
                id: "date",
                headerStyle: { textAlign: 'left' },
                width: 125,
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.date}` && Moment.utc(row.original.date).format("MM/DD/YYYY")
            },
            {
                Header: 'Start',
                id: 'starttime',
                headerStyle: { textAlign: 'left' },
                width: 125,
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.starttime}` && Moment(row.original.starttime, "HH:mm:ss").format("h:mm a"),
                sortable: false
            },
            {
                Header: 'End',
                id: 'endtime',
                headerStyle: { textAlign: 'left' },
                width: 125,
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.endtime}` && Moment(row.original.endtime, "HH:mm:ss").format("h:mm a"),
                sortable: false
            },
            {
                Header: 'Observations',
                accessor: 'description',
                headerStyle: { textAlign: 'left' },
                style: { 'whiteSpace': 'unset' },
                width: 850,
                Cell: row => row.index === this.state.editRow ? this.renderEditable(row) : `${row.original.description}`,
                sortable: false
            },
            {
                Header: '',
                id: 'delete',
                width: 50,
                accessor: '[row identifier to be passed to button]',
                Cell: props => {
                    return (
                        <button className="btn btn-danger deleteBtn"
                            onClick={() => {
                                this.deleteRow(props.original.id);
                                // console.log("ID of this activity:" + props.original.id)
                            }}
                        ><i className="fa fa-trash"></i></button>
                    )
                },
                sortable: false
            }
        ]
        // Cell: (row) => <EditButton myId={row.original.id} index={row.index} {...childProps} />,
        // handleDelete(row.original.id)} index={row.index} {...childProps}>Delete</button>
        return (
            <div> <ReactTable
                data={this.props.diaperData}
                columns={columns}
                defaultPageSize={5}
            />
            </div >
        )
    };
}

export default Change;