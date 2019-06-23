import React, { Component } from "react";
import "./Childcard.css";

class Childcard extends Component {
    render() {
        return (
            <div>
                <div className="container childCard">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h1>Child Name</h1></div>
                                <div className="card-body"><h3>Child Info</h3></div>
                                <div className="card-footer">
                                    <button className="btn btn-success">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <br></br>
            </div>
        );
    }
}

export default Childcard;
