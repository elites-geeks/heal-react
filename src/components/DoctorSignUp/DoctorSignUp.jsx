import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ClientSignUp({ handleChange }) {
  return (
    <>
      <Form.Group controlId="formBasicName">
        <Form.Control type="text" onChange={handleChange}
          placeholder="User Name" />
      </Form.Group>

      <Form.Group controlId="formBasicFirstName">
        <Form.Control type="text"
          onChange={handleChange}
          placeholder="First Name" />
      </Form.Group>

      <Form.Group controlId="formBasicLastName">
        <Form.Control
          onChange={handleChange}
          type="text" placeholder="Last Name" />
      </Form.Group>

      <Form.Group controlId="formBasicCountry">
        <Form.Control
          onChange={handleChange}
          type="text" placeholder="Country" />
      </Form.Group>

      <Form.Group controlId="formBasicDateOfBirth">
        <Form.Control onChange={handleChange}
          type="text" placeholder="DateOfBirth" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control onChange={handleChange}  type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group controlId="formBasicPhoneNum">
        <Form.Control onChange={handleChange}  type="number" placeholder="Phone Number" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control onChange={handleChange}  type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group>
        <Form.File onChange={handleChange}  id="FormControlFile1" label="Ulpoad Image" />
      </Form.Group>

      <Form.Group controlId="formBasicGender">
        <Form.Control defaultValue="gender" onChange={handleChange}  as="select" >
          <option value="gender" disabled>
            Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </Form.Control>
      </Form.Group>


      <Form.Group controlId="formBasicSpecality">
        <Form.Control onChange={handleChange}  type="text" placeholder="Specality" />
      </Form.Group>

      <Form.Group controlId="formBasicLocation">
        <Form.Control onChange={handleChange}  type="text" placeholder="Location" />
      </Form.Group>

      <Form.Group controlId="formBasicClinicPhoneNum">
        <Form.Control onChange={handleChange}  type="number" placeholder="Clinic Phone Num" />
      </Form.Group>

      <Form.Group controlId="formBasicYearsOfExp">
        <Form.Control onChange={handleChange}  type="number" placeholder="YearsOfExp" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
}

export default ClientSignUp;
