import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function DoctorProfile() {
  return (
    <><div className="dashboard">

      <h1>Doctor Dashboard</h1>
      <Link to={'/dashboard/doctor/newVisitDoctor'}>
        <Button placeholder={'Visit Reception'}>
          Visit Reception
        </Button>
      </Link>
      <Link to={'/dashboard/doctor/appointments'}>
        <Button placeholder={'Appointments'}>
          Appointments
        </Button>
      </Link>
    </div>
    </>
  );
}

export default DoctorProfile;
