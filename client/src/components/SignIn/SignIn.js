import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./SignIn.css";
import Landing from "../../pages/Landing";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isValid: localStorage.getItem("user")
    };
  }

  handleChange = event => {
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);

    /*
    ---------Axios call get made here--------

    */

    localStorage.setItem("user", this.state.email);

    this.setState({
      isValid: true
    });
  };

  render() {  
    return (
      <div>
        <Landing />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="jumbotron">
                <h1>Baby Notes</h1>
              </div>
            </div>
            <div className="col-md-6 registerPage">
              <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="FormField__Input"
                      placeholder="Enter your email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="FormField__Input"
                      placeholder="Enter your password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="FormField">
                    {this.state.isValid ? <Redirect to="/home" /> : null}
                    <button
                      className="FormField__Button mr-20"
                      onClick={this.submitForm}
                    >
                      <h3>Sign In</h3>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
