import React from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./landing.css";
import CarouselSlide from "../components/Carousel";

class Landing extends React.Component {
  render() {

    return (
      <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <CarouselSlide />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 loginSwitch">
            <h1 className="welcomeTitle">Welcome to Baby Notes</h1>
            <p>
              Babies bring long days and short years for new parents! Baby Notes
              lets you keep track of her feeding, sleeping, and diaper changes,
              and lets you easily monitor developments in real time. What's
              more, there's a personal journal where you can record milestone
              moments from first smiles and giggles to first steps! Register for
              an account or sign in now!
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};
}
export default Landing;
