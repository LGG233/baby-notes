import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class createChild extends Component {
    constructor() {
        super();
        this.state = {
            babyName: "",
            birthDate: "",
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
        console.log("New Child created:");
        console.log(this.state);
    };

    render() {
        return (
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
                                    <label className="FormField__Label" htmlFor="babytName">Name</label>
                                    <input
                                        type="text"
                                        id="babyName"
                                        className="FormField__Input"
                                        placeholder="Child Name"
                                        name="babytName"
                                        value={this.state.babyName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    <label className="FormField__Label" htmlFor="Birthdate">
                                        Birthdate
                  </label>
                                    <input
                                        type="text"
                                        id="birthdate"
                                        className="FormField__Input"
                                        placeholder="Birthdate"
                                        name="birthDate"
                                        value={this.state.birthDate}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="FormField">
                                    {this.state.isValid ? <Redirect to="/" /> : null}
                                    <button
                                        className="FormField__Button mr-20"
                                        onClick={this.submitForm}
                                    >
                                        <h3>Add child <i className="fa fa-user-plus"></i></h3>
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
export default createChild;
