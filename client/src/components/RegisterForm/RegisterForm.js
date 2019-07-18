import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./RegisterForm.css";
// import Landing from "../../pages/Landing";
import axios from "axios";

class RegisterForm extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    passwordError: "",
    redirectSignIn: false
    // isValid: localStorage.getItem("user")
  };

  handleChange = event => {
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

handleSubmit = event => {
  event.preventDefault();
  const user = {
    email: this.state.email,
    password: this.state.password,
    firstname: this.state.firstName,
    lastname: this.state.lastName
  };
  if (this.formValidate()) {
    axios.post('/user/register', user)
      .then(res => {
        console.log(res.data);
        this.handleRegisterResponse(res.data);
      }).catch(function (error) {
        console.log(error)
      })
    //  clear form
    this.setState({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      passwordError: "",
    })
  }
};

  handleRegisterResponse = text => {
    switch (text) {
      case "That email already exists. Try again.":
        return this.setState({
          emailError: "Email already exists. Try again.",
          email: "",
          password: ""
        })
      case "You have been registered. Please log in.":
        return this.setState({
          redirectSignIn: true
        })
      default:
        console.log("No match")
    }
  }

  formValidate = () => {
    if (this.state.firstName.length === 0) {
      this.setState({
        firstNameError: "Firstname cannot be blank."
      })
      return false
    } 
    if (this.state.lastName.length === 0) {
      this.setState({
        lastNameError: "Lastname cannot be blank."
      })
      return false;
    }
     if (this.state.email.length === 0) {
      this.setState({
        emailError: "Email cannot be blank."
      })
      return false;
    } 
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
      this.setState({
        emailError: "Must be a valid email."
      })
      return false;
    }
     if (this.state.password.length < 6 ) {
      this.setState({
        passwordError: "Password must be at least six (6) characters."
      })
      return false;
    } 
     if (this.state.password.length === 0) {
      this.setState({
        passwordError: "Password cannot be blank."
      })
      return false;
    } 
    return true;
}

  render() {
    return (
      <div className="container-fluid">
        { this.state.redirectSignIn && <Redirect to="/SignIn" />}
        <div className="row">
          <div className="col-md-6">
            <div className="jumbotron">
              <h1 className="jumboBanner">Sign Up</h1>
            </div>
          </div>
          <div className="col-md-6 registerPage">
            {/* <Landing /> */}
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="firstName">
                    First Name
                  </label>
                  <div className="alert-danger" >{this.state.firstNameError} </div>
                  <input
                    type="text"
                    id="firstName"
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
                  <div className="alert-danger" >{this.state.lastNameError} </div>
                  <input
                    type="text"
                    id="lastName"
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
                  <div className="alert-danger" >{this.state.emailError} </div>
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
                  <div className="alert-danger" >{this.state.passwordError} </div>
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
                  {/* {this.state.isValid ? <Redirect to="/" /> : null} */}
                  <button
                    className="FormField__Button"
                    onClick={this.submitForm}
                  >
                    <h3>Register <i className="fa fa-user-plus"></i></h3>
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
