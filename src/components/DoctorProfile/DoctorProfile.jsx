import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {getAppointment} from "../../reducers/utils"
import cookie from "react-cookies";


function DoctorProfile() {
  // const getAppointments=()=>{
  //   // console.log(cookie.get("auth-cookie"))
  //   getAppointment();

  // }
  return (
    <div className="dashboard">
      <h1>Doctor Profile</h1>
      <Link to={'/dashboard/doctor/newVisitDoctor'}>
        <Button >
          Visit Reception
        </Button>
      </Link>
      <Link to={'/dashboard/doctor/appointments'}>
        <Button >
          Appointments
        </Button>
      </Link>
    </div>
  );
}

export default DoctorProfile;
