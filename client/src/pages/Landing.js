import React from "react";
import {
    BrowserRouter as 
    NavLink
  } from "react-router-dom";

function Landing() {
    return (
        <div>
             <div className="loginSwitch">
            <NavLink
              exact
              to="/register"
              activeClassName="loginSwitcher_item-Active"
              className="pageSwitcher_item"
            >
              {" "}
              Register
            </NavLink>
            <NavLink
              exact
              to="/signin"
              activeClassName="loginSwitcher_item-Active"
              className="pageSwitcher_item"
            >
              {" "}
              Log In
            </NavLink>
          </div>
        </div>
    );
}

export default Landing;