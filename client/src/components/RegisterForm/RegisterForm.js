import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./RegisterForm.css";
import Landing from "../../pages/Landing";

class RegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
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

    localStorage.setItem("user", this.state.email);
    this.setState({
      inValid: true
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <Landing />
        <div className="row">
          <div className="col-md-12">
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="FormField__Input"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="Last Name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="FormField__Input"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.LastName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="FormField__Input"
                    placeholder="Email"
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
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="FormField">
                  {this.state.isValid ? <Redirect to="/" /> : null}
                  <button
                    className="FormField__Button mr-20"
                    onClick={this.submitForm} 
                  >
                  <h3>Register  <i className="fa fa-pencil"></i></h3>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RegisterForm;
