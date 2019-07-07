import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

const columns = [
    {
        Header: '',
        id: 'edit',
        accessor: '[row identifier to be passed to button]',
        Cell: ({ value }) => (<button className="btn btn-success">Edit</button>),
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
                .format("MMM D, YYYY")
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

class Feeding extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
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