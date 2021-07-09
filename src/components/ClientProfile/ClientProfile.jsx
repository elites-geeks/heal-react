
import  Button  from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function ClientProfile() {
    return (
      <>
      <h1>Client Profile</h1>
      <Link to='/makenewVisit'><Button >Make a new Visit</Button></Link> 
      <Link to='/viewPindingTest'><Button>View Pinding tests</Button></Link> 
      <Button >Appointments</Button>
      <Button >Procedures</Button>
      <Link to='/Subscribe'><Button>Subscribe to insurance Company</Button></Link> 
      </>
      
    );
  }
  
  export default ClientProfile;