import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function ClientSignUp({ handleChange }) {
  return (
    <>
      <Form.Group>
        <Form.Control
          name="firstname"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="username"
          type="text"
          placeholder="User Name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="date_of_birth"
          placeholder="DateOfBirth"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="number"
          name="phone_number"
          placeholder="Phone Number"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
        />
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
          name="gender"
          defaultValue="gender"
          as="select"
          onChange={handleChange}
        >
          <option value="gender" disabled>
            Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
}

export default ClientSignUp;
