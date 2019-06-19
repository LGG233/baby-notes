import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';

// import DrawerToggleButton from '../SideDrawer/Drawer/DrawerToggleButton';
const navbar = props => (
    <header className="navbar">
        <nav className="navigation">
            {/* <div>
                <DrawerToggleButton />
            </div> */}
            <div className="navbar-logo"><a href="/">Baby Notes</a></div>
            <div className="spacer"></div>
            <div className="navbar-items">
                <ul>
                    <li><Link to="/">Sign Up</Link></li>
                    <li><Link to="/activiy">Activity</Link></li>
                    <li><Link to="/child">Child</Link></li>
                    <li><Link to="/journal">Journal</Link></li>
                    <li><Link to="/">Log Out</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default navbar;


