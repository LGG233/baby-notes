import React, { Component } from "react";
import Childcard from "../components/Childcard/Childcard";
import { Link } from 'react-router-dom';
import "./home.css";
import API from "../util/API";
import axios from "axios";

class Home extends Component {
  state = {
    date: "",
    title: "",
    notes: ""
  };

  componentDidMount() {
    localStorage.removeItem("child-id");
  }


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
    axios
      .post("/child", newChild)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  // newChildForm = () => {
  //   console.log("new child button clicked");
  //   this.newChildForm()
  //   window.open("/createChild");
  // }

  render() {
    return (
      <div className="container-fluid new-image">
        <div className="row">
          <div className="col-md-12 page-title">
            <h1 className="parentTitle">Parents Home Page</h1>
            <h2>Welcome, {localStorage.getItem("user-name")}</h2>
            <p>{localStorage.getItem("user-id") ? <Link to="/createChild">Add a Child</Link> : <h5> </h5>}</p>
            {/* add logic under new child button*/}
            {/* <button className="btn btn-success" Component={Link} to="/createChild">
              <h4>
                New Child <i className="fa fa-child" />
              </h4>
            </button> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 childCards">
              <Childcard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
