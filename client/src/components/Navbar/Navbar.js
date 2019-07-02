import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import '../SignIn/SignIn'
import Axios from "axios";
// import '../RegisterForm/RegisterForm'
// import SignIn from "../SignIn/SignIn";

const logOut = () => {
    Axios.get("/logout").then(data => console.log(data))
    localStorage.removeItem("user-name")
    localStorage.removeItem("user-id")
    window.location.replace("/")

}

// import DrawerToggleButton from '../SideDrawer/Drawer/DrawerToggleButton';
function navbar(props) {
    return (
        <header className="navbar">
            <nav className="navigation">
                <div className="navbar-logo"><Link to="/">BabyNotes</Link></div>
                <div className="navbar-items">
                    <ul>
                        <li>{localStorage.getItem("user-id") ? <Link to="/home">Parent</Link> : <Link to="/RegisterForm">Register</Link>}</li>
                        <li>{localStorage.getItem("user-id") ? <Link to="/child">Child</Link> : <Link to="/SignIn">Sign In</Link>}</li>
                        <li>{localStorage.getItem("user-id") ? <Link to="/createChild">New Child</Link> : <h5> </h5>}</li>
                        <li>{localStorage.getItem("user-id") ? <Link to="/newActivity">New Activity</Link> : <h5> </h5>}</li>
                        <li>{localStorage.getItem("user-id") ? <Link to="/journalEntry">Journal Entry</Link> : <h5> </h5>}</li>
                        <li>{localStorage.getItem("user-id") ? <button onClick={logOut}>Log Out</button> : <h5> </h5>}</li>
                    </ul>
                </div>
            </nav>
        </header>
    )

};

export default navbar;


