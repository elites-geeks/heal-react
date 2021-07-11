import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function DoctorSignUp({ handleChange }) {
  return (
    <>
      <Form.Group>
        <Form.Control
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="User Name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="text"
          name="firstname"
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

      <Form.Group>
        <Form.Control
        name="specialty"
          onChange={handleChange}
          type="text"
          placeholder="Specality"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
        name="clinicLocation"
          onChange={handleChange}
          type="text"
          placeholder="Clinic Location"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
        name="clinicPhoneNumber"
          onChange={handleChange}
          type="number"
          placeholder="Clinic Phone Num"
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

export default DoctorSignUp;
