import React from "react";
import Table from "../components/SleepTable/SleepTable";
// import JournalTable from "../components/JournalTable/Journaltable";
import "./child.css";
// import Card from "react-bootstrap/Card";
// import CardDeck from 'react-bootstrap/CardDeck';
// import Childcard from "../components/Childcard/Childcard";

function Child() {
  return (
    <div className="container-fluid childrenCard" >
      <div className="row">
        <div className="col-md-12 page-title">
          <h1>Child's Page</h1>
          <button className="btn btn-success">New Activity</button>
        </div>
      </div>
      <div className="container-fluid white-container">
        <div className="row">
          <div className="tableElement col-md-5">
            <h3>Sleep</h3>
            <Table />
          </div>
          <div className="tableElement col-md-1"></div>
          <div className="tableElement col-md-5">
            <h3>Eat</h3>
            <Table />
          </div>
        </div>
        <div className="row">
          <div className="tableElement col-md-5">
            <h3>Diaper Change</h3>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Child;
