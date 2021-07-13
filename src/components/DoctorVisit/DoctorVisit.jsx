import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function DoctorVisit(props) {
  return (
    <div>
      <Link to="/patient/history">
        <Button>'View patient history</Button>
      </Link>
      <Link to="/PolicyChosen">
        <Button>Policy Chosen</Button>
      </Link>
      <Button>Accept</Button>
      <Button>Reject</Button>
    </div>
  );
}

export default DoctorVisit;
