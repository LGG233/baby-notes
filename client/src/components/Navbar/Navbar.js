import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import axios from 'axios';

// import DrawerToggleButton from '../SideDrawer/Drawer/DrawerToggleButton';
const navbar = props => {

    const logOut = () => {
        axios.get("/logout").then(data => console.log(data))
        localStorage.removeItem("userId")
    }
    
  return (
    <header className="navbar">
      <nav className="navigation">
        <div className="navbar-logo">
          <Link to="/">BabyNotes</Link>
        </div>
        <div className="navbar-items">
          <ul>
            <li>
              <Link to="/home">Parent</Link>
            </li>
            {/* <li><Link to="/activity">Activity</Link></li> */}
            <li>
              <Link to="/child">Child</Link>
            </li>
            <li>
              <Link to="/createChild">New Child</Link>
            </li>
            <li>
              <Link to="/journalEntry">Journal Entry</Link>
            </li>
            <li>
              <Link to="/newActivity">New Activity</Link>
            </li>
            <li>
              <button onClick={logOut}>Log Out</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default navbar;
