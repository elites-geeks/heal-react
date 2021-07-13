import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap"
import { useHistory, useLocation } from 'react-router-dom';
function DoctorVisitReceiption() {
  let location = useLocation();
  let history = useHistory();
  const [token, setToken] = useState([]);
  let { from } = location.state || { from: { pathname: "/dashboard/doctor/newVisitDoctor" } };
  const submitHandler = async (tk) => {
    history.replace({ ...from, pathname: from.pathname === "/dashboard/doctor/newVisitDoctor" ? `/dashboard/doctor/patientSub` : from.pathname });
  }

  return (
    <>
      <h1>New Visit Reception</h1>
      <Card style={{ width: "24rem", height: "fit-content", padding: "10px" }}>
        <Card.Body>
          <Form onSubmit={e => {
            e.preventDefault();
            submitHandler(token);
          }}>
            <Form.Group controlId="formBasicToken">
              <Form.Control type="text" placeholder="token number" onChange={e => setToken({ ...e.target.value })} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default DoctorVisitReceiption;
