import React, { Component } from "react";
import Childcard from "../components/Childcard/Childcard";
import "./home.css";
import API from "../util/API";

class Home extends Component {
  state = {
    date: "",
    title: "",
    notes: ""
  };

  handleClick = () => {
    API.getAllActivities()
      .then(res =>
        this.setState({
          data: res.data
        })
      )
  };

  render() {
    return (
      <div className="container-fluid new-image">
        <div className="row">
          <div className="col-md-12 page-title">
            <h1>Parents Home Page</h1>
            <button className="btn btn-success"><h4>New Child <i className="fa fa-child"></i></h4></button>
            <button className="btn btn-success"><h4>New Journal Entry</h4></button>
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
