import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function ClientSignUp() {
    return (
      <>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Control type="text" placeholder="User Name" />
          </Form.Group>
          
          <Form.Group controlId="formBasicDateOfBirth">
          <Form.Control type="text" placeholder="DateOfBirth" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formBasicPhoneNum">
          <Form.Control type="number" placeholder="Phone Number" />
          </Form.Group>
          
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group>
            <Form.File id="FormControlFile1" label="Ulpoad Image" />
            </Form.Group>

            <Form.Group controlId="formBasicGender">
          <Form.Control type="text" placeholder="Gender" />
          </Form.Group>

          <Form.Group controlId="formBasicSpecality">
          <Form.Control type="text" placeholder="Specality" />
          </Form.Group>

          <Form.Group controlId="formBasicLocation">
          <Form.Control type="text" placeholder="Location" />
          </Form.Group>

          <Form.Group controlId="formBasicClinicPhoneNum">
          <Form.Control type="number" placeholder="Clinic Phone Num" />
          </Form.Group>

          <Form.Group controlId="formBasicYearsOfExp">
          <Form.Control type="number" placeholder="YearsOfExp" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
         </Button>
      </Form>
      </>
      
    );
  }
  
  export default ClientSignUp;