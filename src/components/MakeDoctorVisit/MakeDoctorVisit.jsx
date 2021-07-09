import React from 'react'

import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap' 

function DoctorVisit(props) {
    return (
        <div>
            
         <Form>
        <Form.Group controlId="formBasiSpecality">
          <Form.Control type="text" placeholder="Specality" />
          </Form.Group>
          
          <Form.Group controlId="formBasicTime">
          <Form.Control type="text" placeholder="Time" />
          </Form.Group>

          <Form.Group controlId="formBasicCity">
          <Form.Control type="text" placeholder="City" />
          </Form.Group>

          <Button variant="primary" type="submit">
          search
         </Button>
      </Form>
       </div>
    )
}

export default DoctorVisit