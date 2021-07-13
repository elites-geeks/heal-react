import React from "react";
import Form from "react-bootstrap/Form";

function UserType({changeType, handleChange}) {
  
  return (
    <>
      <Form.Group style={{marginTop:"1rem"}} controlId="formGridState">
        <Form.Control as="select" defaultValue="none" name="type" onChange={e => {
          handleChange(e)
          changeType(e.target.value)}}>
          <option value="none" disabled>
            select a user type
          </option>
          <option value="client">Client</option>
          <option value="doctor">Doctor</option>
          <option value="employee">Employee</option>
        </Form.Control>
      </Form.Group>
    </>
  );
}

export default UserType;
