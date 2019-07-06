import React, { Component } from "react";
import "./Childcard.css";
import API from "../../util/API";
import moment from 'moment';

class Childcard extends Component {
    state = {
        name: "",
        birthday: "",
        id: "",
        data: []
    };

    componentDidMount() {
        API.getChildren(localStorage.getItem("user-id")).then(res => {
            this.setState({
                data: res.data
            });
            console.log(res.data);
        });
    }

    handleClick = (id, name) => {
        console.log("this Child Button was clicked for child id: ------")
        // console.log(props)
        localStorage.setItem("child-id", id);
        localStorage.setItem("child-name", name);

        window.location.replace("/child", this.props)
    }

    render() {
        return (
            <div>
                {this.state.data.map(child => (
                    <div className="card">
                        <div className="card-header"><h3>{child.name}</h3></div>
                        <div className="card-body">
                            <h4>Birthday: {moment(child.dob).format("MMMM D, YYYY")}</h4>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success childBtn" onClick={() => this.handleClick(child.id, child.name)}>
                                <h5>Select </h5>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Childcard;
