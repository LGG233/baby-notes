import React, { Component } from "react";
import "./Childcard.css";



class Childcard extends Component {
    state = {
        name: "",
        birthday: "",
        id: ""
    };



    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="container childCard">
                    <div className="col-lg-12"> */}
                    <div className="card">
                        <div className="card-header">
                            <h2>Child Name</h2></div>
                        <div className="card-body"><h4>Birthday: Child BD</h4></div>
                        <div className="card-footer">
                            <button className="btn btn-success childBtn value=3"><h5>Select</h5></button>
                        </div>
                    </div>
                </div>
            </div>

            // </div>
            // </div>
        );
    }
}

export default Childcard;
