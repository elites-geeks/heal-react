import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const InsuranceDashboard = (props) => {
  return (
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
  );
};

export default InsuranceDashboard;
