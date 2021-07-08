
import  Button  from '../Buttonsignin/Button'
import {Link} from 'react-router-dom'

function AccountantProfile() {
    return (
      <>
      <h1>Client Dashboard</h1>
      <Link to='/new/AccountantVisitReceiption'><Button placeHolder={'new Visit Reception'}  /></Link> 
      <Link to='/InvoicesExported'><Button placeHolder={'Invoices exported'}/></Link> 
      
      </>
      
    );
  }
  
  export default AccountantProfile;