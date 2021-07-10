import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useState } from "react";

import { signUp } from "../../reducers/utils";

function ClientSignUp() {
  const [formBody, setformBody] = useState({});

  const handleChange = (e) => {
    console.log("formBody", formBody);
    setformBody({ ...formBody, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form onSubmit={() => signUp(formBody)}>
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
            type="text"
            name="country"
            placeholder="Country"
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
            type="number"
            name="phone_number"
            placeholder="Phone Number"
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
            name="img"
            type="text"
            placeholder="Upload image"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            defaultValue="gender"
            id="genders"
            name="gender"
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

        <Form.Group>
          <Form.Control
            defaultValue="role"
            id="roles"
            name="role"
            as="select"
            onChange={handleChange}
          >
            <option value="role" disabled>
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

        <Form.Group>
          <Form.Control
            defaultValue="type"
            id="types"
            name="type"
            as="select"
            onChange={handleChange}
          >
            <option value="type" disabled>
              Type
            </option>
            <option value="patient">patient</option>
            <option value="doctor">doctor</option>
            <option value="employee">employee</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ClientSignUp;
