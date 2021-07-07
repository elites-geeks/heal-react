import { connect } from 'react-redux';
import { Button} from '@material-ui/core';
import{NavLink} from 'react-router-dom' ;
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';
const addNewPolicy = (props) => {
  return (
    
    <div>
     <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Offer Name</Form.Label>
    <Form.Control type="text"  />
  
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Offer covrage</Form.Label>
    <Form.Control type="text"  />
    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Offer cost per month</Form.Label>
    <Form.Control type="text"  />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Offer Cost per Year</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Add new
  </Button>
</Form>
    </div>
  );
};



export default addNewPolicy;