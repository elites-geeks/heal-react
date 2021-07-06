import React from 'react'
import Form from 'react-bootstrap/Form';
function Input() {
    return (
      <Form.Group controlId="formBasicPhoneNum">
      <Form.Control type="text" placeholder="Phone Number" />
    </Form.Group>
    )
}

export default Input