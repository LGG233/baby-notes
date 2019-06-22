import React, { Component } from "react";

class Child extends Component {
  render() {
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
}

export default Child;
