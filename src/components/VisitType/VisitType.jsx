import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Button } from "react-bootstrap";

import test from '../../assets/images/tests.jpg'
import doctorVisit from '../../assets/images/openVisit.png'

function VisitType() {
  return (
    <>
      <h1>Visit Type</h1>
      <div className="cards">
        <Card>
          <Card.Img variant="top" src={doctorVisit} />
          <Card.Body>
            <Card.Title>Doctor Visit</Card.Title>
            <Link to={"/Doctor/visit"}>
              <Button>Open Doctor Visit</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src={test}
          />
          <Card.Body>
            <Card.Title>Self Visit</Card.Title>

            <Link to={"/dashboard/doctor/add/procedure"}>
              <Button>Open Self Visit</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default VisitType;



//  <h1>Visit Type</h1>
//       <Link to='/Doctor/visit'><Button >Doctor Visit</Button></Link>
//       <Link to='/dashboard/doctor/add/procedure'> <Button >SelfVisit</Button></Link>