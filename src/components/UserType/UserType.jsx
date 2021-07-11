import React from "react";
import Form from "react-bootstrap/Form";

function UserType({changeType}) {
  
  return (
    <>
      <Form.Group style={{marginTop:"1rem"}} controlId="formGridState">
        <Form.Control as="select" defaultValue="none" name="type" onChange={changeType}>
          <option value="none" disabled>
            select a user type
          </option>
          <option value="client">Client</option>
          <option value="doctor">Doctor</option>
          <option value="employee">Medical Staff</option>
          <option value="accountant">Accountant</option>
          <option value="insurance-rep">Insurance Rep</option>
        </Form.Control>
      </Form.Group>
    </>
  );
}

export default UserType;
