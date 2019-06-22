// import React, { Component } from "react";
// import "./RegisterForm.css";

// class RegisterForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//       userName: "",
//       email: "",
//       password: ""
//     };
//   }

//   handleSubmit = event => {
//     event.preventDefault();
//     const data = this.state;
//     console.log(data);
//   };

//   handleInputChange = event => {
//     event.preventDefault();
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };
//   render() {
//     return (

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import "./RegisterForm.css"

class RegisterForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
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

    console.log('The form was submitted with the following data:');
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-md-10">
            <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="firstName">First Name</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="First Name" name="first name" value={this.state.firstName} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="Last Name">Last Name</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Last Name" name="last name" value={this.state.LastName} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button>
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




//       <div className="FormCenter">
//         {/* <div className="row">
//           <div className="col-md-12">
//             <h1>Register Form</h1> */}
//             <form onSubmit={this.handleSubmit} className="FormFields">
//               <div className="FormField>
//                <label 
//               <h3>
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   name="firstName"
//                   onChange={this.handleInputChange}
//                 />
//               </h3>
//               <h2>Last Name</h2>
//               <h3>
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   name="lastName"
//                   onChange={this.handleInputChange}
//                 />
//               </h3>
//               <h2>Username </h2>
//               <h3>
//                 <input
//                   type="text"
//                   placeholder="UserName"
//                   name="userName"
//                   onChange={this.handleInputChange}
//                 />
//               </h3>
//               <h2>Email</h2>
//               <h3>
//                 <input
//                   type="text"
//                   placeholder="Enter Email"
//                   name="email"
//                   onChange={this.handleInputChange}
//                 />
//               </h3>
//               <h2>Password </h2>
//               <h3>
//                 <input
//                   type="text"
//                   placeholder="Password"
//                   name="password"
//                   onChange={this.handleInputChange}
//                 />
//               </h3>
//               <h1>
//                 <button
//                   className="btn btn-success"
//                   onSubmit={this.handleSubmit}
//                 >
//                   Submit{""}
//                 </button>
//               </h1>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default RegisterForm;
