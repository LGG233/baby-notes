import React from "react";
// import Card from "react-bootstrap/Card";
// import CardDeck from 'react-bootstrap/CardDeck';
import Table from "../components/Table/Table";
import Childcard from "../components/Childcard/Childcard";

function Child() {
  return (
    <div>
      <div className="container-fluid childrenCard">/
        <div className="row">
          <div className="col-md-4">
            <Childcard />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="tableElement col-md-12">
            <h3>Sleep</h3>
            <Table />
            <h3>Eat</h3>
            <Table />
            <h3>Diaper Change</h3>
            <Table />
            <h3>Their Journal</h3>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Child;
