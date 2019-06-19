import React from "react";
import './Navbar.css';
// import DrawerToggleButton from '../SideDrawer/Drawer/DrawerToggleButton';
const navbar = props => (
    <header className="navbar">
        <nav className="navigation">
            {/* <div>
                <DrawerToggleButton />
            </div> */}
            <div className="navbar-logo"><a href="/">Baby Notes</a></div>
            <div class="spacer"></div>
            <div className="navbar-items">
                <ul>
                    <li><a href="/">Sign Up</a></li>
                    <li><a href="/">Log In</a></li>
                    <li><a href="/">Log Out</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default navbar;


