import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Activity from "./pages/Activity";
import Landing from "./pages/Landing";
// import Journal from "./pages/Journal";
import Child from "./pages/Child";
import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import SignIn from "./components/SignIn/SignIn";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="jumbotron">
            <h1>Baby Notes</h1>
          </div>
          {/* 
          <br></br>
          <br></br>
          <br></br> */}
          <div className="loginSwitch">
            <div className="container ">

              <NavLink exact to="/register" activeClassName="loginSwitcher_item-Active" className="pageSwitcher_item"> Register</NavLink>
              <NavLink exact to="/signin" activeClassName="loginSwitcher_item-Active" className="pageSwitcher_item"> Log In</NavLink>
            </div>
          </div>
          {/* <br></br> */}
          <Switch>
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/activity" component={Activity} />
              <Route exact path="/child" component={Child} />
            {/* <Route exact path="/journal" component={Journal} /> */}
              <Route component={NotFound} />
            </div>
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={RegisterForm} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/child" component={Child} />
          <Route exact path="/journal" component={Journal} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
=======
      </Router>
    );
  }
>>>>>>> d977664f94d7819fcbb3f1b46755ec66a39760f7
}
export default App;
