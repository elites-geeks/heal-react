import React from "react";

import { Link,Switch,Route } from "react-router-dom";
import { Button } from "react-bootstrap";

function PatientSub(props) {
  return (
    <Switch>
      <Route path="/dashboard/doctor/patientSub">
    <div>
      <Link to="/patient/history">
        <Button>View patient history</Button>
      </Link>
      <Link to="/dashboard/doctor/diagnosis">
        <Button>Write dignoses</Button>
      </Link>
      <Link to="/dashboard/doctor/add/procedure">
        <Button>add procedure</Button>
      </Link>
    </div>
    </Route>
    </Switch>
  );
}

export default PatientSub;
