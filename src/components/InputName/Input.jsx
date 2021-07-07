import React from 'react'
import Form from 'react-bootstrap/Form';
function Input(props) {
    return (
      <Form.Group controlId="formBasicName">
      <Form.Control type="name" placeholder={props.placeHolder} />
    </Form.Group>
    // <input placeholder="User Name"/>
    )
}

export default Input