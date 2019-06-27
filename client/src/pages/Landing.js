import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import "./landing.css";


const Landing = function () {

  return (
    // <div className="container-fluid">
      <div className="col-md-6 offset-md-6 loginSwitch">
        <Link
          to="/register"
          className="loginSwitcher_item-Active pageSwitcher_item"
        >
          {" "}
          Register
      </Link>
        <Link
          to="/signin"
          className="loginSwitcher_item-Active pageSwitcher_item"
        >
          {" "}
          Log In
      </Link>
      </div>
      // </div>
    // </div>
  );
};
export default Landing;
