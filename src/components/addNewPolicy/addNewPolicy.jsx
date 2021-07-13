import { Button,Table} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const addNewPolicy = (props) => {

  return (

    <div>
      <div className="form" style={{width:"60%",height:"25%", marginTop:"7rem",marginLeft:"11rem",padding:"1rem"}}>
      <Form>
        <Form.Group controlId="formBasicEmail" style={{padding:"2px"}}>
          <Form.Label style={{color:'#000'}}>Offer Name</Form.Label>
          <Form.Control type="text" />

        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:'#000'}}>Offer covrage</Form.Label>
          <Form.Control type="text" />

        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label style={{color:'#000'}}>Offer cost per month</Form.Label>
          <Form.Control type="text" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label style={{color:'#000'}}>Offer Cost per Year</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">

        </Form.Group>
        <Button variant="primary" type="submit">
          Add new
        </Button>
      </Form>
      </div>
      <div className="table" style={{width:"100%",marginRight:"5rem"}}>
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
      
    </div>
  );
};



export default addNewPolicy;