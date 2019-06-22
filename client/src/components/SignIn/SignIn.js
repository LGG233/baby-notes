import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./SignIn.css";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button> <Link to="/signIn" className="FormField__Link">Sign In</Link>
          </div>
        </form>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
