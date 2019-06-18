import React from 'react';
import { Container, Divider, Card, Button, Segment } from 'semantic-ui-react';

// class Journal extends React.Component {
//   state = {

//   }
// }

function App() {
  return (
    <div className="App">
      <div className="header">
        <Container textAlign='center'><h1>BABY NOTES</h1></Container>
        <Container textAlign='center'><h3>An app for tracking baby's feeding, changing, and sleeping times</h3></Container>
      </div>
      <Divider hidden />
      <div className="container">
        <Segment textAlign='center'>
          <h3>Schedule for feeding and diapering goes here.</h3>
          <Button.Group>
            <Button>Add diaper change</Button>
            <Button>Add feeding</Button>
          </Button.Group>
        </Segment>
      </div>
      <Divider hidden />
      <div className="ui equal width centered grid">
        <Card.Group>
          <Card className="sixteen wide column">
            <Card.Content>
              <Card.Header>
                <h2>journal entries</h2>
              </Card.Header>
              <Card.Description>
                <p>journal entries of baby's milestones will go here</p>
              </Card.Description>
              <Button><h5>Add journal entry</h5></Button>
            </Card.Content>
          </Card>
          <Card className="sixteen wide column">

          </Card>
        </Card.Group>
      </div>
    </div>
  );
}

export default App;
