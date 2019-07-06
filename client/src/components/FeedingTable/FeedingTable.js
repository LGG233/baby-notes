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
            .format("MMMM D, YYYY")
        }
    },
    {
        Header: 'Start',
        accessor: 'starttime',
        headerStyle: { textAlign: 'left' },
        width: 80,
    },
    {
        Header: 'End',
        accessor: 'endtime',
        headerStyle: { textAlign: 'left' },
        width: 80
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