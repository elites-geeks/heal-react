
import Button from 'react-bootstrap/Button'
import { Link, Switch, Route } from "react-router-dom";

function AccountantProfile() {
  return (
    <>
      <Switch>
        <Route path="/dashboard/account">
          <h1>Accountant Dashboard</h1>
          <Link to='/new/AccountantVisitReceiption'><Button >new Visit Reception</Button></Link>
          <Link to='/InvoicesExported'><Button >Invoices exported</Button></Link>
        </Route>
      </Switch>
    </>

  );
}

export default AccountantProfile;
