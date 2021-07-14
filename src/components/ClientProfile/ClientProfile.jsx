import { Card, Button } from "react-bootstrap";
import { Link, Switch, Route } from "react-router-dom";
import './ClientProfile.scss'
import Visit from "../../assets/images/visit.jpg";
import Appoint from "../../assets/images/appoint.png";
import sub from "../../assets/images/sub22.jpg";
import Pindingprocedure from "../../assets/images/pendingProcedure.jpg";
function ClientProfile() {

  return (
    <>
      <Switch>
        <Route path="/dashboard/client">
            <h1>Client Dashboard</h1>
            <div className="cards">
              <Card>
                <Card.Img variant="top" src={Visit} />
                <Card.Body>
                  <Card.Title>New Visit</Card.Title>
                  <Link to={"/makenewVisit"}>
                    <Button className="clientBtn">Open a new Visit</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src={Pindingprocedure}
                />
                <Card.Body>
                  <Card.Title> Pinding procedure</Card.Title>
                  <Link to={"/viewPendingProcedures"}>
                    <Button className="clientBtn">Pinding procedure</Button>
                  </Link>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img
                  variant="top"
                  src={Appoint}
                />
                <Card.Body>
                  <Card.Title> Appointments</Card.Title>
                  <Link to={"/client/appointment"}>
                    <Button className="clientBtn">Appointments</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant="top"
                  src={sub}
                />
                <Card.Body>
                  <Card.Title>Subscribe to insurance Company</Card.Title>
                  <Link to={"/Subscribe"}>
                    <Button className="clientBtn">Subscribe</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
        </Route>
      </Switch>
    </>
  );
}

export default ClientProfile;
