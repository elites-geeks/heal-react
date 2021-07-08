import React from 'react'
import Form from 'react-bootstrap/Form';

function UserType(props) {
  const changeType = (e) => {
    props.handleUserTypeChange(e.target.value)
  }
  return (
    <>
      <Form.Group controlId="formGridState">
        <Form.Control as="select" onChange={changeType}>
          <option selected disabled>select a user type</option>
          <option value="client" >client</option>
          <option value="doctor">doctor</option>
          <option value="employee">employee</option>
        </Form.Control>
      </Form.Group>
    </>
  )
}

export default UserType