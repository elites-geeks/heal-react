import React from 'react'
import Button from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form';
import './Button.scss'; 
function button() {
    return (
      <>
    <Form>
      <Button variant="primary" type="submit">submit</Button>
    </Form>
    {/* <button>submit</button> */}

 
    </>
    )
}

export default button