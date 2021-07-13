import { Form } from "react-bootstrap";

function DoctorSignUp({ handleChange }) {
  return (
    <>
     <h3>Doctor Registration</h3>
      <Form.Group>
        <Form.Control
          name="img"
          type="text"
          placeholder="Upload image"
          onChange={handleChange}
        />
      </Form.Group>

    
      <Form.Group>
        <Form.Control
        name="specialty"
          onChange={handleChange}
          type="text"
          placeholder="Specality"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
        name="clinicLocation"
          onChange={handleChange}
          type="text"
          placeholder="Clinic Location"
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
        name="clinicPhoneNumber"
          onChange={handleChange}
          type="number"
          placeholder="Clinic Phone Num"
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

export default DoctorSignUp;
