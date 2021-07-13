import { Link, Switch, Route } from "react-router-dom";
import { Button,Card } from "react-bootstrap";
import Policy from "../../assets/images/policy.jpg"
import Subsic from "../../assets/images/subsic.png"
import Pending from "../../assets/images/pending.jpg"
const InsuranceDashboard = (props) => {
  return (
    <Switch>
      <Route path="/dashboard/insurance">
        <div className="dashboard">
          <h1>Insurance Rep Dashboard</h1>
          {/* ///////////////// */}
          <div className="cardsInsu" style={{display:"inline-flex"}}>
            <div style={{margin:"15px"}}>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Subsic} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/subRequests">
            <Button>New subscription Request</Button>
          </Link>
  </Card.Body>
</Card>
</div>
{/* //////////// */}
<div  style={{margin:"15px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Pending} style={{height:"12rem"}} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/pendingVisits">
            <Button>Pending Visits</Button>
            
          </Link>
  </Card.Body>
</Card>   
</div>
{/* //////////// */}
<div  style={{margin:"15px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Policy} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to="/addNewPolicy">
            <Button>Add New Policy</Button>
            
          </Link>
  </Card.Body>
</Card>   
</div>
</div>
          
        </div>
      </Route>
    </Switch>
  );
};

export default InsuranceDashboard;
