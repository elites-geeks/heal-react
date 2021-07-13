import { Button,Table} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const addNewPolicy = (props) => {

  return (

    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:'white'}}>Offer Name</Form.Label>
          <Form.Control type="text" />

        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:'white'}}>Offer covrage</Form.Label>
          <Form.Control type="text" />

        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:'white'}}>Offer cost per month</Form.Label>
          <Form.Control type="text" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{color:'white'}}>Offer Cost per Year</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">

        </Form.Group>
        <Button variant="primary" type="submit">
          Add new
        </Button>
      </Form>
      <Table  style={{ width: "30rem", marginLeft: "10rem" }}
          size="sm"
          variant="dark"
          responsive
          striped
          bordered
          hover>
  <thead>
    <tr>
      
      <th>Offer Name</th>
      <th>Offer covrage</th>
      <th>Offer cost per month</th>
      <th>Offer cost per Year</th>
    </tr>
  </thead>
  <tbody>
    
  </tbody>
</Table>
      
    </div>
  );
};



export default addNewPolicy;