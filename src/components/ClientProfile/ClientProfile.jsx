import Button from "react-bootstrap/Button";
import { Link, Switch, Route } from "react-router-dom";

function ClientProfile() {
  const style = {
    width: "30vw",
  };
  return (
    <Switch>
      <Route path="/dashboard/client">
        <div className="dashboard">
          <h1>Client Profile</h1>
          <Link to="/makenewVisit">
            <Button style={style}>Open a new Visit</Button>
          </Link>
          <Link to="/viewPendingProcedures">
            <Button style={style}>View Pending procedures</Button>
          </Link>
          <Link to="/client/appointment/:id">
            <Button style={style}>Appointments</Button>
          </Link>
          <Link to="/client/procedures/:id">
            <Button style={style}>Procedures</Button>
          </Link>
          <Link to="/Subscribe">
            <Button style={style}>Subscribe to insurance Company</Button>
          </Link>
        </div>
      </Route>
    </Switch>
  );
}

export default ClientProfile;
