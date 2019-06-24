import React, { Component } from "react";
import Childcard from "../components/Childcard/Childcard";
import Journal from "./Journal";


class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1> Parents Home Page</h1>
            <button className="btn btn-success">New Child</button>
            <Childcard />
            <br></br>
            <Journal />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
