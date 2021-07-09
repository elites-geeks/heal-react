import React from 'react'
import { Link } from 'react-router-dom'

import {Button} from 'react-bootstrap'


function VisitType() {
  return (
    <>
      <h1>Visit Type</h1>
      <Link to='/Doctor/visit'><Button >Doctor Visit</Button></Link>
      <Button >SelfVisit</Button>
    </>

  );
}

export default VisitType;