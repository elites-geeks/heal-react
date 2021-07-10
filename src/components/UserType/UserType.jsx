import React from "react";
import Form from "react-bootstrap/Form";

function UserType({changeType}) {
  
  return (
    <>
      <Form.Group controlId="formGridState">
        <Form.Control as="select" defaultValue="none" name="type" onChange={changeType}>
          <option value="none" disabled>
            select a user type
          </option>
          <option value="client">client</option>
          <option value="doctor">doctor</option>
          <option value="employee">employee</option>
        </Form.Control>
      </Form.Group>
    </>
  );
}

export default UserType;
