import React from 'react'

import Form from 'react-bootstrap/Form';
 
function UserType() {
    return (
      <>
     <Form.Group  controlId="formGridState">
      <Form.Control as="select" defaultValue="client">
        <option>client</option>
        <option>doctor</option>
        <option>employee</option>
      </Form.Control>
    </Form.Group>

 
    </>
    )
}

export default UserType