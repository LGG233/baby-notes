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
}

export default Home;
