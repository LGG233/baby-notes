import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "../SignIn/SignIn";
import Axios from "axios";
// import '../RegisterForm/RegisterForm'
// import SignIn from "../SignIn/SignIn";

const logOut = () => {
    Axios.post("/logout").then(data => console.log(data))
    localStorage.removeItem("user-name")
    localStorage.removeItem("user-id")
    localStorage.removeItem("child-id")
    localStorage.removeItem("child-name")
    window.location.replace("/")
}

// const signedOut = () => {
//     [
//         <Link to="/RegisterForm">Register</Link>,
//         <Link to="/SignIn">Sign In</Link>
//     ]
// }

// import DrawerToggleButton from '../SideDrawer/Drawer/DrawerToggleButton';
function navbar(props) {
  return (
    <header className="navbar">
      <nav className="navigation">
        <div className="navbar-logo">
          <Link to="/">BabyNotes</Link>
        </div>
        <div className="navbar-items">
          <ul>
            <li>
              {localStorage.getItem("user-id") ? (
                 <Link to="/home">Parent</Link> ): ( <Link to="/RegisterForm">Register</Link>
              )}
            </li>
            <li>
              {localStorage.getItem("user-id") ? (
               <h5> </h5> ) : ( <Link to="/SignIn">Sign In</Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
        <div className="logoutBtn">
          {localStorage.getItem("user-id") ? (
            <button className="btn carouselBtn2" onClick={logOut}>
              Log Out
            </button>
          ) : (
            <h5> </h5>
          )}
        </div>
    </header>
  );
// }
//     return (
//         <header className="navbar">
//             <nav className="navigation">
//                 <div className="navbar-logo"><Link to="/">BabyNotes</Link></div>
//                 <div className="navbar-items">
//                     <ul>
//                         {/* <li>{!localStorage.getItem("user-id") ? (): <Link to = "/home">Parent</Link>}</li> */}
//                         <li>{localStorage.getItem("user-id") ? <Link to="/home">Parent</Link> : <Link to="/RegisterForm">Register</Link>}</li>
//                         <li>{localStorage.getItem("user-id") ? <h5> </h5> : <Link to="/SignIn">Sign In</Link>}</li>
//                         <li>{localStorage.getItem("user-id") ? <button onClick={logOut}>Log Out</button> : <h5> </h5>}</li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//     )
};

export default navbar;
