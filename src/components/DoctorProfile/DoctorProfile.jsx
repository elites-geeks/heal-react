
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function DoctorProfile() {
  return (
    <div className="dashboard">
      <h1>Doctor Profile</h1>
      <Link to={'/dashboard/doctor/newVisitDoctor'}>
        <Button placeHolder={'Visit Reception'}>
          Visit Reception
        </Button>
      </Link>
      <Link to={'/dashboard/doctor/appointments'}>
        <Button placeHolder={'Appointments'}>
          Appointments
        </Button>
      </Link>
    </div>
  );
}

export default DoctorProfile;
