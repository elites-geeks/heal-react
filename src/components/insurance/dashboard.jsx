import { Link, Switch, Route } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Policy from "../../assets/images/policy.jpg"
import Subsic from "../../assets/images/subsic.png"
import Pend from "../../assets/images/pend.jpg"
const InsuranceDashboard = (props) => {
  return (
    <Switch>
      <Route path="/dashboard/insurance">
        <h1>Insurance Rep Dashboard</h1>
        <div className="cards">
          <Card>
            <Card.Img variant="top" src={Subsic} />
            <Card.Body>
              <Card.Title>Insurance Subscription Request</Card.Title>
              <Link to="/subRequests">
                <Button>New subscription Request</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Pend} />
            <Card.Body>
              <Card.Title>Pending Visits</Card.Title>
              <Link to="/pendingVisits">
                <Button>Pending Visits</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card >
            <Card.Img variant="top" src={Policy} />
            <Card.Body>
              <Card.Title>New Policy</Card.Title>
              <Link to="/addNewPolicy">
                <Button>Add New Policy</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Route>
    </Switch>
  );
};

export default InsuranceDashboard;
