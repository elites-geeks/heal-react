import React from 'react'
import { Link } from 'react-router-dom'

import { Card, Button } from "react-bootstrap";

import test from '../../assets/images/tests.jpg'
import doctorVisit from '../../assets/images/openVisit.png'

function VisitType() {
  return (
    <>
      <div className="dashboard">
<h1 style={{ marginTop: "8rem" }}>Visit Type</h1>
<div className="cards">
  <div >
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={doctorVisit} />
      <Card.Body>
        <Card.Title>Doctor visit</Card.Title>

        <Link to={"/Doctor/visit"}>
          <Button>Visit</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>

  <div style={{ marginLeft: "15px" }}>
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={test}
        style={{ height: "11.9rem" }}
      />
      <Card.Body>
        <Card.Title>SelfVisit</Card.Title>

        <Link to={"/dashboard/doctor/add/procedure"}>
          <Button>Visit</Button>
        </Link>
      </Card.Body>
    </Card>
  </div>


</div>
</div>
    </>

  );
}

export default VisitType;



//  <h1>Visit Type</h1>
//       <Link to='/Doctor/visit'><Button >Doctor Visit</Button></Link>
//       <Link to='/dashboard/doctor/add/procedure'> <Button >SelfVisit</Button></Link>