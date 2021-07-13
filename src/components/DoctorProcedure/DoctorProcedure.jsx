import React from "react";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function DoctorProcedure(props) {
  return (
    <div>
      <Link to="/Add/Lab">
        <Button>LAb</Button>
      </Link>
      <Link to="/Add/Radiolagy">
        <Button>Radiolagy</Button>
      </Link>
      <Link to="/Add/Pharmacy">
        <Button>Pharmacy</Button>
      </Link>
      <Link to="/Add/Therapy">
        <Button>Therapy</Button>
      </Link>
    </div>
  );
}

export default DoctorProcedure;
