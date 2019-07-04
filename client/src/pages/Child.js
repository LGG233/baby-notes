import React from "react";
import Sleep from "../components/SleepTable/SleepTable";
import Feeding from "../components/FeedingTable/FeedingTable";
import Change from "../components/ChangeTable/ChangeTable";
import "./child.css";
import Journal from "./Journal";

class Child extends React.Component {
  state = {};

  componentDidMount = () => {
    console.log(this.props);

  };

  render() {
    return (
      <div className="container-fluid childPage">
        <div className="row">
          <div className="col-md-12 page-title">
            <h2>Child's Page </h2>
            <button className="btn btn-success">New Activity</button>
          </div>
          {/* <div className="row">
          <div>
            <button className="btn btn-success">New Child</button>
          </div>
        </div> */}
        </div>
        <div className="container-fluid white-container">
          <div className="row">
            <div className="tableElement col-md-5">
              <h3 className="tableHeader">Journal</h3>
              <Journal />
            </div>
            <div className="tableElement col-md-1" />
            <div className="tableElement col-md-5">
              <h3 className="tableHeader">Sleep</h3>
              <Sleep />
            </div>
          </div>
          <div className="row">
            <div className="tableElement col-md-5">
              <h3 className="tableHeader">Diaper Change</h3>
              <Change />
            </div>
            <div className="tableElement col-md-1" />
            <div className="tableElement col-md-5">
              <h3 className="tableHeader">Eat</h3>
              <Feeding />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;
