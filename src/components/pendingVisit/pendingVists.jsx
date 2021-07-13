import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
// import { useHistory, useLocation } from 'react-router-dom';
const pendingVisits = (props) => {
  return (

    <div className='subRequest-container'>
       <Card style={{ width: '18rem',margin:'12px'}}>
        <Card.Body>
          <Card.Title>Pending...</Card.Title>
          <Card.Text>
            Patient ID:
          </Card.Text>
          <Card.Text>
          Patient Name:
          </Card.Text>
          <Card.Text>
            Doctor:
          </Card.Text>
          <Card.Text>
            Diagnoses:
          </Card.Text>

        </Card.Body>
        <Button variant="success">Accepet</Button>
  <Button variant="danger" >Rejects</Button>
      </Card>
      <div>
      <Card style={{ width: '18rem',margin:'12px'}}>
        <Card.Body>
          <Card.Title>Pending...</Card.Title>
          <Card.Text>
            Patient ID:
          </Card.Text>
          <Card.Text>
          Patient Name:
          </Card.Text>
          <Card.Text>
            Doctor:
          </Card.Text>
          <Card.Text>
            Diagnoses:
          </Card.Text>

        </Card.Body>
  <Button variant="success">Accepet</Button>
  <Button variant="danger">Rejects</Button>
      </Card>
      </div>
     
    </div>

  );
};



export default pendingVisits;