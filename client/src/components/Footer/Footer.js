import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <footer className="footer is-primary">
                {/* <div className="container"> */}
                    {/* <div className="colums"> */}
                       <p>&copy; 2019 The Gang</p>
                        {/* <div className="column-has-text-right"> */}
                            <a className="icon" href="https://github.com/"><i className="#">Github</i></a>
                            <a className="icon" href="https://www.heroku.com/home"><i className="#"> Heroku</i></a>
                         {/* </div> */}
                   {/* </div> */}
                {/* </div> */}
            </footer>
        </div>
    );
}
export default Footer;
