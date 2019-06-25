import React, { Component } from "react";
import "./Childcard.css";

class Childcard extends Component {
    render() {
        return (
            <div>
                {/* <div className="container childCard">
                    <div className="col-lg-12"> */}
                        <div className="card">
                            <div className="card-header">
                                <h1>Child Name</h1></div>
                            <div className="card-body"><h3>Birthday: Child BD</h3></div>
                            <div className="card-footer">
                                <button className="btn btn-success childBtn"><h5>Select</h5></button>
                            </div>
                        </div>
                    </div>
                
                // </div>
            // </div>
        );
    }
}

export default Childcard;
