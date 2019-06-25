import React from "react";
import { Link } from "react-router-dom";

const Landing = function() {

  return (
    <div className="loginSwitch">
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
  );
};
export default Landing;
