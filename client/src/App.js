import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Activity from "./pages/Activity";
import Landing from "./pages/Landing";
// import Journal from "./pages/Journal";
import Child from "./pages/Child";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import SignIn from "./components/SignIn/SignIn";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h1>Baby Notes</h1>
              </div>
            </div>
          </div>

          <div className="loginSwitch">
            <NavLink
              exact
              to="/register"
              activeClassName="loginSwitcher_item-Active"
              className="pageSwitcher_item"
            >
              {" "}
              <h3>Register</h3>
            </NavLink>
            <NavLink
              exact
              to="/signin"
              activeClassName="loginSwitcher_item-Active"
              className="pageSwitcher_item"
            >
              {" "}
              <h3>Log In</h3>
            </NavLink>
          </div>
          <div className="switch">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/activity" component={Activity} />
              <Route exact path="/child" component={Child} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div className="App">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
