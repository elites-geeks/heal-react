import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const InsuranceDashboard = (props) => {
  return (
    <>
      <h1>Insurance Rep Dashboard</h1>
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
    </>
  );
};

export default InsuranceDashboard;
