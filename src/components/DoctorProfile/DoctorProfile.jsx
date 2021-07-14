import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import io from 'socket.io-client'
import { pushDoctorNotification } from "../../actions/userActions";
import "./DoctorProfile.scss"
import Visit from "../../assets/images/visit.jpg"
import Appoint from "../../assets/images/appoint.png"

const newAppointNotification = io('https://elite-heal.herokuapp.com/newAppointNotification');


function DoctorProfile() {
  const dispatch = useDispatch();
  useEffect(() => {
    newAppointNotification.on('new-appointment', payload => {
      dispatch(pushDoctorNotification(payload))
    })
  });
  return (
    <>
      <h1>Doctor Dashboard</h1>
      <div className="cards">
        <Card>
          <Card.Img variant="top" src={Visit} />
          <Card.Body>
            <Card.Title> Visit Reception</Card.Title>
            <Link to={'/dashboard/doctor/newVisitDoctor'}>
              <Button >
                Visit Reception
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img variant="top" src={Appoint} />
          <Card.Body>
            <Card.Title> Appointments</Card.Title>
            <Link to={'/dashboard/doctor/appointments'}>
              <Button >
                Appointments
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default DoctorProfile;
