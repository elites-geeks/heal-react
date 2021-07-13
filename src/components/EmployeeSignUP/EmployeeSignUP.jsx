import { Form } from "react-bootstrap";

function EmployeeSignUP({ handleChange }) {
  return (
    <>
    <h3>Employee Registration</h3>
      <Form.Group>
        <Form.Control
          name="img"
          type="text"
          placeholder="Upload image"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="formGridState">
        <Form.Control as="select" defaultValue="none" name="field" onChange={handleChange}>
          <option value="none" disabled>
            Filed of specialty
          </option>
          <option value="lab">Laboratory Technologies</option>
          <option value="drug">Pharmacist</option>
          <option value="radio">Radiologist</option>
          <option value="therapy">Therapist</option>
          <option value="account">Accountant</option>
          <option value="insurance">Insurance Representative</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="institute"
          type="text"
          placeholder="institute"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          name="yearsOfExp"
          onChange={handleChange}
          type="number"
          placeholder="YearsOfExp"
        />
      </Form.Group>

    </>
  );
}

export default EmployeeSignUP;
