import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck';
import TableRend from "../components/Table/Table";

class Child extends Component {
  render() {
    return (

        <div>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Sleep Schedule</Card.Title>
                        <TableRend />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Feeding Schedule</Card.Title>
                        <TableRend />
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Changing Schedule</Card.Title>
                        <TableRend />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Journal Entries</Card.Title>
                        <TableRend />
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>

    );
  }
}

export default Child;
