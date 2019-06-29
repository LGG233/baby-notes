import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Activity from "./pages/Activity";
import Landing from "./pages/Landing";
// import Journal from "./pages/Journal";
// import Child from "./pages/Child";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import SignIn from "./components/SignIn/SignIn";
import "../../node_modules/font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <br />
        {/* <div className="container-fluid">
          <div className="col-md-12">
            <div className="jumbotron">
              <h1>Baby Notes</h1>
            </div>
          </div>
        </div> */}
        <div className="container-fluid MainPage">
          <div class="row">
            <div class="col-md-12">
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
