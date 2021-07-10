import Button from "react-bootstrap/Button";
import { Link, Switch, Route } from "react-router-dom";

function EmployeeProfile() {
  return (
    <>
      <Switch>
        <Route path="/dashboard/empoyee">
          <h1>Employee Dashboard</h1>
          <Link to="/new/EmployeeVisitReceiption">
            <Button>new Visit Reception</Button>
          </Link>
        </Route>
      </Switch>
    </>
  );
}

export default EmployeeProfile;
