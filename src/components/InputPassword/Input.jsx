import React from 'react'
import Form from 'react-bootstrap/Form';
import './Input.scss'
function Input() {
    return (
      
      <Form.Group id="form__field" controlId="formBasicPassword">
      <Form.Control  pattern=".{6,}" required id="inputStyle" type="password" placeholder="Password" />
      <span class="icon"></span>
    </Form.Group>
     
    // <input placeholder="Password"/>
    )
}

export default Input