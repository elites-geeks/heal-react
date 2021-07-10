import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function DoctorSignUp() {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Control type="text" placeholder="User Name" />
        </Form.Group>

        <Form.Group controlId="formBasicFirstName">
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group controlId="formBasicCountry">
          <Form.Control type="text" placeholder="Country" />
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
          <Form.Control as="select" >
          <option selected disabled>
            Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicRole">
        <Form.Control as="select" >
        <option selected disabled>
            Role
          </option>
          <option value="user">user</option>
          <option value="account">institute</option>
          <option value="admin">admin</option>
          <option value="account">account</option>
          <option value="doctor">doctor</option>
          <option value="employee">employee</option>
          <option value="pharmacy">pharmacy</option>
          <option value="client">client</option>
          <option value="insurance">insurance</option>
        </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicType">
        <Form.Control as="select" >
        <option selected disabled>
            Type
          </option>
          <option value="patient">patient</option>
          <option value="doctor">doctor</option>
          <option value="employee">employee</option>
        </Form.Control>
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

export default DoctorSignUp;
