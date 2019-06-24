import React, { Component } from "react";
import Childcard from "../components/Childcard/Childcard";
import Journal from "./Journal";
import "./home.css";


class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 page-title">
            <h1>Parents Home Page</h1>
            <button className="btn btn-success">New Child</button>
            <button className="btn btn-success">New Journal Entry</button>
          </div>
          <Childcard />
          <Childcard />
          <Childcard />
          <br></br>
          <Journal />
        </div>
      </div>
    );
  }
}

export default Home;
