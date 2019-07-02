import React, { Component } from "react";
import Childcard from "../components/Childcard/Childcard";
import "./home.css";
import API from "../util/API";
import axios from "axios";

class Home extends Component {
  state = {
    date: "",
    title: "",
    notes: ""
  };

  handleClick = () => {
    API.getAllActivities().then(res =>
      this.setState({
        data: res.data
      })
    );
  };

  newChild = () => {
    console.log("New Child");
    var newChild = {
      name: "Default Name",
      dob: new Date(),
      UserId: parseInt(localStorage.getItem("userId"))
    };
    axios.post("/child", newChild)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container-fluid new-image">
        <div className="row">
          <div className="col-md-12 page-title">
            <h1>Parents Home Page</h1>
            {/* <p>This should be email {this.props.user.email}</p> */}
            <button className="btn btn-success" onClick={this.newChild}>
              <h4>
                New Child <i className="fa fa-child" />
              </h4>
            </button>
            <button className="btn btn-success">
              <h4>New Journal Entry</h4>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Childcard />
          </div>
          <div className="col-md-4">
            <Childcard />
          </div>
          <div className="col-md-4">
            <Childcard />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
