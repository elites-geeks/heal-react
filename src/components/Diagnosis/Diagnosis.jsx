import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function ClientProfile() {
    return (
      <>
      <h1>Diagnosis </h1>

      <Form.Group controlId="formBasiSymptoms">
          <Form.Control type="text" placeholder="Symptoms" />
          </Form.Group>
          
          <Form.Group controlId="formBasicPeriod">
          <Form.Control type="text" placeholder="Period" />
          </Form.Group>

          <Form.Group controlId="formBasicSigns">
          <Form.Control type="text" placeholder="Signs" />
          </Form.Group>

          <Form.Group controlId="formBasicDiagnosis">
          <Form.Control type="text" placeholder="Diagnosis" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
         </Button>
      
      </>
      
    );
  }
  
  export default ClientProfile;