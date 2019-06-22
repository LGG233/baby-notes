import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

// import DrawerToggleButton from '../SideDrawer/Drawer/DrawerToggleButton';
const navbar = props => (
    <header className="navbar">
        <nav className="navigation">
            {/* <div>
                <DrawerToggleButton />
            </div> */}
            <div className="navbar-logo"><Link to="/">Home</Link></div>
            {/* <div className="spacer"></div> */}
            {/* <div className="loginSwitch"> */}

            {/* </div> */}

            <div className="navbar-items">
                <ul>
                    <li><Link to="/home">Parent Page</Link></li>
                    <li><Link to="/activity">Activity</Link></li>
<<<<<<< HEAD
                    <li><Link to="/child">Child</Link></li>
                    <li><Link to="/journal">Journal</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
=======
                    {/* <li><Link to="/child">Child</Link></li>
                    <li><Link to="/journal">Journal</Link></li> */}
>>>>>>> d977664f94d7819fcbb3f1b46755ec66a39760f7
                    <li><Link to="/">Log Out</Link></li>

                </ul>
            </div>
        </nav>
    </header>
);
export default navbar;


