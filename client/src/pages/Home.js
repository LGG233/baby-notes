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
            <h2>Add child here ++</h2>
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
