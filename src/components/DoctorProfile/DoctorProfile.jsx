import { useEffect } from "react";
import { Button,Card } from "react-bootstrap";
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
    <><div className="dashboard">

      <h1 style={{marginTop:"8rem"}}>Doctor Dashboard</h1>
      <div className="cards">
      <div style={{margin:"15px"}}>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Visit} />
  <Card.Body>
    <Card.Title> Visit Reception</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to={'/dashboard/doctor/newVisitDoctor'}>
        <Button >
          Visit Reception
        </Button>
      </Link>
  </Card.Body>
</Card>
</div>
<div style={{margin:"15px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Appoint} style={{height:"11.9rem"}} />
  <Card.Body>
    <Card.Title> Appointments</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to={'/dashboard/doctor/appointments'}>
        <Button >
          Appointments
        </Button>
      </Link>
  </Card.Body>
</Card>
</div>
</div>
    </div>
    </>
  );
}

export default DoctorProfile;
