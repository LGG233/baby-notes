import React, { Component } from "react";
import "./Childcard.css";
import API from "../../util/API";



class Childcard extends Component {
    state = {
        name: "",
        birthday: "",
        id: "",
        data: []
    };

    componentDidMount() {
        API.getChildren(localStorage.getItem("user-id")
        ).then((res) => {
            this.setState({
                data: res.data
            })
            console.log(res.data)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div >
                        {this.state.data.map((child) =>
                            <div className="card">
                                <div className="card-header">
                                    {child.name}
                                </div>
                                <div className="card-body">
                                    <h4>Birthday: {child.dob}</h4></div>
                                <div className="card-footer">
                                    <button className="btn btn-success childBtn value=3"><h5>Select</h5></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            // </div>
            // </div>
        );
    }
}

export default Childcard;
