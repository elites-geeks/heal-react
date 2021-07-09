
import Button from '../Buttonsignin/Button'
import { Link } from 'react-router-dom'

function AccountantProfile() {
  return (
    <div className="dashboard">
      <h1>Accountant Dashboard</h1>
      <Link to='/new/AccountantVisitReceiption'><Button placeHolder={'new Visit Reception'} /></Link>
      <Link to='/InvoicesExported'><Button placeHolder={'Invoices exported'} /></Link>
    </div>
  );
}

export default AccountantProfile;