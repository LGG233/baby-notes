import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Activity from "./pages/Activity";
import Landing from "./pages/Landing";
// import Journal from "./pages/Journal";
import Child from "./pages/Child";
import createChild from "./components/CreateChild/createChild";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import SignIn from "./components/SignIn/SignIn";
import JournalEntry from "./components/JournalEntry/JournalEntry";
import NewActivity from "./components/NewActivity/NewActivity";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import API from "./util/API";

class App extends Component {

<<<<<<< HEAD
handleLogout = () =>{
  API.logOutUser()
  .then((res) => {
    console.log("logged out!");
    localStorage.removeItem("user")
  })
=======
componentDidMount = () => {
  
>>>>>>> 34df2d69d356e21bd74034529ad65050d4edf085
}

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar handleLogout = {this.handleLogout}/>
        </div>
        <br />
        <div className="container-fluid MainPage">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/register" component={RegisterForm} />
                <Route exact path="/signin" component={SignIn} />
              </Switch>
            </div>
          </div>
          <div className="col-md-12">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/activity" component={Activity} />
              <Route exact path="/child" component={Child} />
              <Route exact path="/createChild" component={createChild} />
              <Route exact path="/journalentry" component={JournalEntry} />
              <Route exact path="/newActivity" component={NewActivity} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <div className="App">
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
