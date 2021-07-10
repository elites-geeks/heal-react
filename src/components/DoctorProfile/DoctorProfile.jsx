import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DoctorProfile() {
  return (
    <div className="dashboard">
      <h1>Doctor Profile</h1>
      <Link to={"/dashboard/doctor/newVisitDoctor"}>
        <Button>Visit Reception</Button>
      </Link>
      <Link to={"/dashboard/doctor/appointments"}>
        <Button>Appointments</Button>
      </Link>
    </div>
  );
}

export default DoctorProfile;
