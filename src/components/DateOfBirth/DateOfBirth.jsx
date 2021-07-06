import React from 'react'
import Form from 'react-bootstrap/Form';
function Input() {
    return (
      <Form.Group controlId="formBasicDateOfBirth">
      <Form.Control type="text" placeholder="Date Of Birth" />
    </Form.Group>
    )
}

export default Input