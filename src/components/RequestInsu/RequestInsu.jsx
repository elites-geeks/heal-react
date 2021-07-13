import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
function Request() {
    return (
      <>
      <h1>New Visit Receiption</h1>
      <Card style={{ width: '18rem',margin:'12px'}}>
        <Card.Body>
          <Card.Title>Request-1</Card.Title>
          <Card.Text>
          Policy Requested:
          </Card.Text>
          <Card.Text>
        Personal Information:
          </Card.Text>
          <Card.Text>
        Medical History
          </Card.Text>
          
        </Card.Body>
  <Button variant="success">Approve</Button>
  <Button variant="danger">Rejects</Button>
      </Card>
      </>
      
    );
  }
  
  export default Request;