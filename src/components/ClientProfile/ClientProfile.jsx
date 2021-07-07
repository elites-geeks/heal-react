
import  Button  from '../Buttonsignin/Button'
import {Link} from 'react-router-dom'

function ClientProfile() {
    return (
      <>
      <h1>Client Profile</h1>
      <Link to='/makenewVisit'><Button placeHolder={'Make a new Visit'}  /></Link> 
      <Link to='/viewPindingTest'><Button placeHolder={'View Pinding tests'}/></Link> 
      <Button placeHolder={'Appointments'}/>
      <Button placeHolder={'Procedures'}/>
      <Link to='/Subscribe'><Button placeHolder={'Subscribe to insurance Company'}/></Link> 
      </>
      
    );
  }
  
  export default ClientProfile;