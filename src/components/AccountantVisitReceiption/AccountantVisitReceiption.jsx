
//import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Button ,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom'
function AccountantVisitReceiption() {
    return (
      <>
      <h1>New Visit Receiption</h1>
      <Form>
        <Form.Group controlId="formBasicToken">
          <Form.Control type="number" placeholder="token number" />
          </Form.Group>
          
        <Link to='/patientReception'>  <Button variant="primary" type="submit">
            Submit
         </Button></Link>
      </Form>
      </>
      
    );
  }
  
  export default AccountantVisitReceiption;