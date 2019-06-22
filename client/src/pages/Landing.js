import React, {Component} from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import SignIn from "../components/SignIn/SignIn";
import {BrowserRouter as Route, NavLink} from "react-router-dom";

class Landing extends Component {
  render () {
  return (
    <div>
      <div className="jumbotron">
        <h1>Baby Notes</h1>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-md-5">
                <NavLink to="/register" activeClassName="FormTitle_link-Active" className="FormTitle_link">Register</NavLink> 
                or <NavLink to="/signIn"   activeClassName="FormTitle_link-Active" className="FormTitle_link">Sign In Here</NavLink>
            </div> 
            <Route exact path ="/register" component ={RegisterForm}> </Route>
            <Route exact path ="/signIn" component ={SignIn}> </Route>
          </div>
      </div>

    </div>
  );
}
}
export default Landing;
