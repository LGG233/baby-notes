import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

// import DrawerToggleButton from '../SideDrawer/Drawer/DrawerToggleButton';
const navbar = props => (
    <header className="navbar">
        <nav className="navigation">
            <div className="navbar-logo"><Link to="/">BabyNotes</Link></div>
            <div className="navbar-items">
                <ul>
                    <li><Link to="/home">Parent</Link></li>
                    {/* <li><Link to="/activity">Activity</Link></li> */}
                    <li><Link to="/child">Child</Link></li>
                    <li><Link to="/">Log Out</Link></li>

                </ul>
            </div>
        </nav>
    </header>
);
export default navbar;


