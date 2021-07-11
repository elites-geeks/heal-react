import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function EmployeeSignUP({ handleChange }) {
  return (
    <>
      <Form.Group>
        <Form.Control
          name="username"
          type="text"
          onChange={handleChange}
          placeholder="User Name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="firstname"
          type="text"
          onChange={handleChange}
          placeholder="First Name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="lastname"
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="phone_number"
          onChange={handleChange}
          type="number"
          placeholder="Phone Number"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="date_of_birth"
          onChange={handleChange}
          type="text"
          placeholder="DateOfBirth"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="gender"
          defaultValue="gender"
          onChange={handleChange}
          as="select"
        >
          <option value="gender" disabled>
            Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="img"
          type="text"
          placeholder="Upload image"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="country"
          onChange={handleChange}
          type="text"
          placeholder="Country"
        />
      </Form.Group>

      <Form.Group controlId="formGridState">
        <Form.Control as="select" defaultValue="none" name="field" onChange={handleChange}>
          <option value="none" disabled>
            Filed of specialty
          </option>
          <option value="lab">Laboratory Technologies</option>
          <option value="drug">Pharmacist</option>
          <option value="radio">Radiologist</option>
          <option value="therapy">Therapist</option>
          <option value="account">Accountant</option>
          <option value="insurance">Insurance Representative</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="institute"
          type="text"
          placeholder="institute"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="yearsOfExp"
          onChange={handleChange}
          type="number"
          placeholder="YearsOfExp"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
}

export default EmployeeSignUP;
