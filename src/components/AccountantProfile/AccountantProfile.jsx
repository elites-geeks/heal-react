
import Button from 'react-bootstrap/Button'
import { Link, Switch, Route } from "react-router-dom";
import { Card } from "react-bootstrap"
import "./AccountantProfile.scss"
import Recption from "../../assets/images/recption.png"
import Exported from "../../assets/images/exported.jpg"


function AccountantProfile() {
  return (
    <>
      <Switch>
        <Route path="/dashboard/account">
          <h1>Accountant Dashboard</h1>
          <div className="cards">
            <Card>
              <Card.Img variant="top" src={Recption}/>
              <Card.Body>
                <Card.Title>New Visit Reception</Card.Title>
                <Link to='/new/AccountantVisitReceiption'><Button >New isit eception</Button></Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Exported} />
              <Card.Body>
                <Card.Title>Invoices Exported</Card.Title>
                <Link to='/InvoicesExported'><Button >Invoices exported</Button></Link>
              </Card.Body>
            </Card>
          </div>
        </Route>
      </Switch>
    </>

  );
}

export default AccountantProfile;
