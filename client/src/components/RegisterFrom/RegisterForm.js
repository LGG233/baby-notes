import React, { Component } from "react";
import "./RegisterForm.css";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="container registerForm">
        <div className="row">
          <div className="col-md-12">
            <h1>Register Form</h1>
            <form onSubmit={this.handleSubmit}>
              <h2>First Name </h2>
              <h3>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={this.handleInputChange}
                />
              </h3>
              <h2>Last Name</h2>
              <h3>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={this.handleInputChange}
                />
              </h3>
              <h2>Username </h2>
              <h3>
                <input
                  type="text"
                  placeholder="UserName"
                  name="userName"
                  onChange={this.handleInputChange}
                />
              </h3>
              <h2>Email</h2>
              <h3>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  onChange={this.handleInputChange}
                />
              </h3>
              <h2>Password </h2>
              <h3>
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInputChange}
                />
              </h3>
              <h1>
                <button
                  className="btn btn-success"
                  onSubmit={this.handleSubmit}
                >
                  Submit{" "}
                </button>
              </h1>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
