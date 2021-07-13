import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
function EmployeeVisitReceiption() {
  return (
    <>
      <h1>New Visit Receiption</h1>
      <Form >
        <Form.Group controlId="formBasicToken">
          <Form.Control type="number" placeholder="token number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default EmployeeVisitReceiption;
