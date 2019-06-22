import React, { Component } from "react";

class Childcard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-title">Child Name</div>
                                <div className="card-body">Child Info</div>
                                <div className="card-footer">
                                    <button className="btn btn-primary">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Childcard;
