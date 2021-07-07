import React from 'react'
import Form from 'react-bootstrap/Form';
import './Input.scss'

function Input(props) {
    return (
      <Form.Group controlId={props.placeHolder}>
      <Form.Control id="inputStyle" class="form-control" type="name" placeholder={props.placeHolder} />
    </Form.Group>
    // <input placeholder="User Name"/>
    )
}

export default Input