
import React from 'react'

import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap' 
function SubscribeToInsuranceCompany(props) {
    return (
        <div>
          <Form>
        <Form.Group  controlId="formGridState">
        <Form.Control   as="select" >
          <option selected disabled>Insurance Companies</option>
         
        </Form.Control>
        <Form.Control   as="select" >
          <option selected disabled>Policies available</option>
         
        </Form.Control>
      </Form.Group>
       <Button >Send request</Button>
       </Form>
       </div>
    )
}

export default SubscribeToInsuranceCompany