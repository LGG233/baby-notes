import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from 'react-router-dom';

class CarouselSlide extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block" src="./img/flowers.jpg" alt="First slide" />
          <Carousel.Caption>
            <h1 className="welcomeTitle">Welcome to Baby Notes</h1>
            <h5 className ="carouselText">
              Babies bring long days and short years for new parents! What's
              more, there's a personal journal where you can record milestone
              moments from first smiles and giggles to first steps!
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="./img/deskPic.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="welcomeTitle">Organize Daily Moves</h1>
            <h5 className ="carouselText">
              Baby Notes lets you keep track of her feeding, sleeping, and
              diaper changes, and lets you easily monitor developments in real
              time..
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="./img/sleepingBaby.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h1 className="welcomeTitle3">Register Now!</h1>
            <h5 className ="carouselText3">Register for an account or sign in now!</h5>
            <button className="btn carouselBtn1"><Link to="/RegisterForm">Register</Link></button>
            <button className="btn carouselBtn2"><Link to="/SignIn">Sign In</Link></button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselSlide;
