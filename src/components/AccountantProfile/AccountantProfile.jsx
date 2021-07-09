
import  Button  from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function AccountantProfile() {
    return (
      <>
      <h1>Client Dashboard</h1>
      <Link to='/new/AccountantVisitReceiption'><Button >new Visit Reception</Button></Link> 
      <Link to='/InvoicesExported'><Button >Invoices exported</Button></Link> 
      
      </>
      
    );
  }
  
  export default AccountantProfile;