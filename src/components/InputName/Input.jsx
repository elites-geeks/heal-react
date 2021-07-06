import React from 'react'
import Form from 'react-bootstrap/Form';
function Input() {
    return (
      <Form.Group controlId="formBasicName">
      <Form.Control type="name" placeholder="User Name" />
    </Form.Group>
    // <input placeholder="User Name"/>
    )
}

export default Input