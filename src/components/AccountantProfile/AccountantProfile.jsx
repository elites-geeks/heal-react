
import Button from 'react-bootstrap/Button'
import { Link, Switch, Route } from "react-router-dom";
import {Card} from "react-bootstrap"
import "./AccountantProfile.scss"
import Recption from "../../assets/images/recption.png"
import Exported from "../../assets/images/exported.jpg"


function AccountantProfile() {
  return (
    <>
      <Switch>
        <Route path="/dashboard/account">
          <h1 style={{marginTop:"9rem",marginLeft:"30rem"}}>Accountant Dashboard</h1>
<div className="cards">
  <div  style={{margin:"15px"}}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Recption} style={{height:"11rem"}} />
  <Card.Body>
    <Card.Title>New Visit Reception</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to='/new/AccountantVisitReceiption'><Button >new Visit Reception</Button></Link>
  </Card.Body>
</Card>
</div>
<div  style={{margin:"15px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Exported} />
  <Card.Body>
    <Card.Title>Invoices exported</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to='/InvoicesExported'><Button >Invoices exported</Button></Link>
  </Card.Body>
</Card>    
</div>
</div>
        
        </Route>
      </Switch>
    </>

  );
}

export default AccountantProfile;
