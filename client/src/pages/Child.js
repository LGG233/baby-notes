import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';
import TableRend from "../components/Table/Table";

function Child() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">Child Name
                  <button className="btn btn-primary">Edit</button>
          </div>
        </div>
        <div className="tableElement">
          Inject activities table component here X 4
            </div>
      </div>
    </div>
  );
}

export default Child;
