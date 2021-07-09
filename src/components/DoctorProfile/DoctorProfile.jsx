
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'



function DoctorProfile() {
    return (
      <>
      <h1>Doctor Profile</h1>
      <Link to='/newVisitDoctor'><Button  >new Visit</Button></Link> 
      <Link to=''><Button>Appointments</Button></Link> 
      </>
      
    );
  }
  
  export default DoctorProfile;