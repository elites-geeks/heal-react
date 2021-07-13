import { Card, Button } from "react-bootstrap";
import { Link, Switch, Route } from "react-router-dom";

import './ClientProfile.scss'

import Visit from "../../assets/images/visit.jpg";
import Appoint from "../../assets/images/appoint.png";
import procedure from "../../assets/images/procedure.jpg";
import sub from "../../assets/images/sub22.jpg";
import Pindingprocedure from "../../assets/images/pendingProcedure.jpg";
function ClientProfile() {

  return (
    <>
      <Switch>
        <Route path="/dashboard/client">
          <div className="dashboard">
            <h1 style={{ marginTop: "8rem" }}>Client Dashboard</h1>
            <div className="cards">
              <div >
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Visit} />
                  <Card.Body>
                    <Card.Title> Visit Reception</Card.Title>

                    <Link to={"/makenewVisit"}>
                      <Button>Open a new Visit</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>

              <div style={{ marginLeft: "15px" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={Pindingprocedure}
                    style={{ height: "11.9rem" }}
                  />
                  <Card.Body>
                    <Card.Title> Pinding procedure</Card.Title>

                    <Link to={"/viewPendingProcedures"}>
                      <Button>Pinding procedure</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>

              <div style={{ marginLeft: "15px" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={Appoint}
                    style={{ height: "11.9rem" }}
                  />
                  <Card.Body>
                    <Card.Title> Appointments</Card.Title>

                    <Link to={"/client/appointment"}>
                      <Button>Appointments</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>

              <div style={{ marginTop: "10px",marginRight: "10px" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={procedure}
                    style={{ height: "11.9rem" }}
                  />
                  <Card.Body>
                    <Card.Title> procedure</Card.Title>

                    <Link to={"/client/procedures/:id"}>
                      <Button>procedure</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card style={{ width: "18rem",height:"19rem",marginTop: "10px",marginRight: "10px" }}>
                  <Card.Img
                    variant="top"
                    src={sub}
                    style={{ height: "11.9rem" }}
                  />
                  <Card.Body>
                    <Card.Title style={{fontSize:"15px" }}>Subscribe to insurance Company</Card.Title>

                    <Link to={"/Subscribe"}>
                      <Button>Subscribe</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default ClientProfile;

{
  /* <div className="dashboard">
<h1>Client Dashboard</h1>
<Link to="/makenewVisit">
  <Button style={style}>Open a new Visit</Button>
</Link>
<Link to="/viewPendingProcedures">
  <Button style={style}>View Pending procedures</Button>
</Link>
<Link to="/client/appointment">
  <Button style={style}>Appointments</Button>
</Link>
<Link to="/client/procedures/:id">
  <Button style={style}>Procedures</Button>
</Link>
<Link to="/Subscribe">
  <Button style={style}>Subscribe to insurance Company</Button>
</Link>
</div> */
}
