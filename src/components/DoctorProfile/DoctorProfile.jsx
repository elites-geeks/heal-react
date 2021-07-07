
import  Button  from '../Buttonsignin/Button'
import {Link} from 'react-router-dom'



function DoctorProfile() {
    return (
      <>
      <h1>Doctor Profile</h1>
      <Link to='/newVisitDoctor'><Button placeHolder={'new Visit'}  /></Link> 
      <Link to=''><Button placeHolder={'Appointments'}/></Link> 
      </>
      
    );
  }
  
  export default DoctorProfile;