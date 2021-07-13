import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import io from 'socket.io-client'
import { pushDoctorNotification } from "../../actions/userActions";
// import cookie from "react-cookies";

// const token = cookie.load('auth-token')
// , {
//   auth: {
//     token
//   }
// }
const newAppointNotification = io('https://elite-heal.herokuapp.com/newAppointNotification');


function DoctorProfile() {
  const dispatch = useDispatch();
  useEffect(() => {
    newAppointNotification.on('new-appointment', payload => {
      dispatch(pushDoctorNotification(payload))
    })
  });
  return (
    <><div className="dashboard">

      <h1>Doctor Dashboard</h1>
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
    </>
  );
}

export default DoctorProfile;
