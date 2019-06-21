import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">User Name</label>
            <input type="username" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.userName} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Sign In</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn