import React, { Component } from "react";
import Childcard from "../components/Childcard/Childcard";
import Journal from "./Journal";
import "./home.css";


class Home extends Component {
  render() {
    return (
      <div className="container-fluid new-image">
        <div className="row">
          <div className="col-md-12 page-title">
            <h1>Parents Home Page</h1>
            <button className="btn btn-success">New Child</button>
            <button className="btn btn-success">New Journal Entry</button>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Childcard />
              <Childcard />
              <Childcard />
            </div>
            {/* <br></br> */}
            <div className="col-md-8 white-container">
              <Journal />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
