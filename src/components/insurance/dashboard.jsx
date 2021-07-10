import { Link, Switch, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
const InsuranceDashboard = (props) => {
  return (
    <Switch>
    <Route path="/dashboard/insuranceRep">
    <div className="dashboard">
      <h1>Insurance Rep </h1>
      <Link to="/subRequests">
        <Button>New subscription Request</Button>
        <br />
      </Link>
      <Link to="/pendingVisits">
        <Button>Pending Visits</Button>
        <br />
      </Link>
      <Link to="/addNewPolicy">
        <Button>Add New Policy</Button>
        <br />
      </Link>
    </div>
    </Route>
    </Switch>
  );
};

export default InsuranceDashboard;
