import React from 'react'
import Form from 'react-bootstrap/Form';
function Input() {
    return (
      <Form.Group controlId="formBasicName">
      <Form.Control type="name" placeholder="Location" />
    </Form.Group>
    )
}

export default Input