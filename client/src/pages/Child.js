import React from "react";
import Sleep from "../components/SleepTable/SleepTable";
import Feeding from "../components/FeedingTable/FeedingTable";
import Change from "../components/ChangeTable/ChangeTable";
import "./child.css";
<<<<<<< HEAD
import JournalTable from "../components/JournalTable/JournalTable";
=======
import JournalTable from "../components/JournalTable/Journaltable";
>>>>>>> 092019c6ea0446cb2b882f4f42de476db3515633
import { Link } from 'react-router-dom';
import API from "../util/API";


class Child extends React.Component {
  state = {
    journalData: [],
    eatingData: [],
    sleepingData: [],
    diaperData: []
  };

  componentDidMount() {
    API.getAllJournalActivities(localStorage.getItem("child-id")).then(res => {
      this.setState({
        data: res.data
      });
      console.log("this is the Activities data")
      console.log(res.data);
      var journalArray = [];
      var eatingArray = [];
      var sleepingArray = [];
      var diaperArray = [];
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].actList_Id === "1") {
          journalArray.push(res.data[i]);
        }
        else if (res.data[i].actList_Id === "2") {
          sleepingArray.push(res.data[i]);
        }
        else if (res.data[i].actList_Id === "3") {
          diaperArray.push(res.data[i]);
        }
        else {
          eatingArray.push(res.data[i]);
        }
      }
      console.log("journal ", journalArray)
      this.setState({ journal: journalArray })
      console.log("sleeping ", sleepingArray)
      console.log("diaper ", diaperArray)
      console.log("feeding ", eatingArray)

      this.setState({
        journalData: journalArray,
        eatingData: eatingArray,
        sleepingData: sleepingArray,
        diaperData: diaperArray
      }, () => {
        setTimeout(() => {
          console.log(this.state)
        }, 2000)
      })
    })
  }

  render() {
    return (
      <div className="container-fluid childPage">
        <div className="row">
          <div className="col-md-12 page-title">
            <h2>Child's Page </h2>
            <ul>
              <li>{localStorage.getItem("user-id") ? <Link to="/newActivity">Post New Activity</Link> : <h5> </h5>}</li>
              <li>{localStorage.getItem("user-id") ? <Link to="/journalEntry">Create Journal Entry</Link> : <h5> </h5>}</li>
            </ul>
          </div>
        </div>
        <div className="container-fluid white-container">
          <div className="row">
            <div className="tableElement col-md-5">
              <h3 className="tableHeader">Journal</h3>
              <JournalTable journalData={this.state.journalData} />
            </div>
            <div className="tableElement col-md-1" />
            <div className="tableElement col-md-5">
              <h3 className="tableHeader">Sleep</h3>
              <Sleep sleepingData={this.state.sleepingData} />
            </div>
          </div>
          <div className="row">
            <div className="tableElement col-md-5">
              <h3 className="tableHeader">Diaper Change</h3>
              <Change diaperData={this.state.diaperData} />
            </div>
            <div className="tableElement col-md-1" />
            <div className="tableElement col-md-5">
              <h3 className="tableHeader">Eat</h3>
              <Feeding eatingData={this.state.eatingData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;
