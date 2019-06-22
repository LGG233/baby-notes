<<<<<<< HEAD
import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Card>
          <Card.Body>
            <h2>Name: </h2>
            <h2>Age: </h2>
            <h2>Birthday: </h2>
          </Card.Body>
          <Button.Toolbar>
            <Button as="input" type="button" value="Select" />
            <Button as="input" type="button" value="Edit Child" />
          </Button.Toolbar>
        </Card>
        <Card>
          <Card.Body>
            <h2>Name: </h2>
            <h2>Age: </h2>
            <h2>Birthday: </h2>
          </Card.Body>
          <Button.Toolbar>
            <Button as="input" type="button" value="Select" />
            <Button as="input" type="button" value="Edit Child" />
          </Button.Toolbar>
        </Card>
        <Card>
          <Card.Body>
            <h2>Name: </h2>
            <h2>Age: </h2>
            <h2>Birthday: </h2>
          </Card.Body>
          <Button.Toolbar>
            <Button as="input" type="button" value="Select" />
            <Button as="input" type="button" value="Edit Child" />
          </Button.Toolbar>
        </Card>
        <Card>
          <Card.Body>
            <h2>Name: </h2>
            <h2>Age: </h2>
            <h2>Birthday: </h2>
          </Card.Body>
          <Button.Toolbar>
            <Button as="input" type="button" value="Select" />
            <Button as="input" type="button" value="Edit Child" />
          </Button.Toolbar>
        </Card>
      </div>
    );
  }
=======
import React, {Component} from "react";
import Child from "./Child";
import Journal from "./Journal";


class Home extends Component {
render () {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <h1> Parents Home Page</h1>
        <h2>Add child here ++</h2>
        <Child />
        <br></br>
        <Journal />
        </div>
      </div>
    </div>
  );
}
>>>>>>> a75e914490e61cb68de1edd842bd9f696debe8a7
}

export default Home;
