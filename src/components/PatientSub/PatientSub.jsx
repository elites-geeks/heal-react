import React from "react";

import { Link,Switch,Route } from "react-router-dom";
import { Button,Card } from "react-bootstrap";

function PatientSub(props) {
  return (
   
    <Switch>
      <Route path="/dashboard/doctor/patientSub">
      <div className="dashboard">
        <div className="cardsPatient" style={{display:"inline-flex"}}>
          <div style={{margin:"15px"}}>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>patient history </Card.Title>
    
    <Card.Text>
     Here you can see patient history..
    </Card.Text>
    <Link to="/patient/history">
        <Button>View patient history</Button>
      </Link>
  </Card.Body>
</Card>
</div>
      {/*  */}
      <div style={{margin:"15px"}}>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>dignoses</Card.Title>
   
    <Card.Text>
    Here you can write dignoses..
    </Card.Text>
    <Link to="/dashboard/doctor/diagnosis">
        <Button>Write dignoses</Button>
      </Link>
  </Card.Body>
</Card>
</div>
{/*  */}
<div style={{margin:"15px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>procedure</Card.Title>
    
    <Card.Text>
     Here you can add procedure..
    </Card.Text>
    <Link to="/dashboard/doctor/add/procedure">
        <Button>add procedure</Button>
      </Link>
  </Card.Body>
</Card>
</div>
</div>
      </div>
    </Route>
    </Switch>
   
  );
}

export default PatientSub;
