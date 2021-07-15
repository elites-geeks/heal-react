import React from "react";

import { Link, Switch, Route } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function PatientSub(props) {
  return (<>
    <h1>Patient Reception</h1>
    <Switch>
      <Route path="/dashboard/doctor/patientSub">
        <div className="dashboard">
          <div className="cards" style={{ display: "inline-flex" }}>
            <div style={{ margin: "15px" }}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Patient Medical History </Card.Title>

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
            <div style={{ margin: "15px" }}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Diagnoses</Card.Title>

                  <Card.Text>
                    Here you can write diagnoses..
                  </Card.Text>
                  <Link to="/dashboard/doctor/diagnosis">
                    <Button>Write diagnoses</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            {/*  */}
            <div style={{ margin: "15px" }}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Assign Medical Procedures</Card.Title>

                  <Card.Text>
                    Here you can add procedures..
                  </Card.Text>
                  <Link to="/dashboard/doctor/add/procedure">
                    <Button>Add procedure</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  </>
  );
}

export default PatientSub;
