import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function DoctorVisit(props) {
  return (
    <div>
      <Link to="/patient/history">
        <Button>View patient history</Button>
      </Link>
      <Link to="/Write/dignoses">
        <Button>Write dignoses</Button>
      </Link>
      <Link to="/add/procedure">
        <Button>add procedure</Button>
      </Link>
    </div>
  );
}

export default DoctorVisit;
