import React from 'react'
import Form from 'react-bootstrap/Form';
import './Input.scss'
function Input() {
    return (
      
      <Form.Group controlId="formBasicPassword">
      <Form.Control id="inputStyle" type="password" placeholder="Password" />
    </Form.Group>
     
    // <input placeholder="Password"/>
    )
}

export default Input