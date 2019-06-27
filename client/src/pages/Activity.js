import React, { Component } from "react";
import TableRend from "../components/SleepTable/SleepTable.js";
import "./activity.css";
// import Table from "react-bootstrap/Table";

class Activity extends Component {
    render() {
        return (
            <div className="container-fluid activity-image" >
                <div className="row">
                    <div className="col-md-12 page-title">
                        <h1>Child's Sleep / Feeding / Diaper Schedule</h1>
                        <button className="btn btn-success">New Activity</button>
                    </div>
                </div>
                <div className="white-container">
                    <TableRend />
                </div>
            </div>
        )
    }
}

export default Activity;