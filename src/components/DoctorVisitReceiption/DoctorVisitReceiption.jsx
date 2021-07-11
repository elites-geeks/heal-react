import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap"
function DoctorVisitReceiption() {
  return (
    <>
      <h1>New Visit Reception</h1>
      <Card style={{ width: "24rem", height: "fit-content", padding: "10px" }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicToken">
              <Form.Control type="number" placeholder="token number" />
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
