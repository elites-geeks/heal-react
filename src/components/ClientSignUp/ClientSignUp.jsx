import { Form } from "react-bootstrap";
import './ClientSignUp.scss'

function ClientSignUp({ handleChange }) {
  return (
    <>
      <h3>Patient Registration</h3>
      <Form.Group>
        <Form.Control
          required
          name="img"
          type="text"
          placeholder="Upload image"
          onChange={handleChange}
        />
      </Form.Group>
      <label style={{margin:0 , marginRight:"2rem"}}>
        Are you subscribed to insurance company?
      </label>
        <input onClick={handleChange} className="insurance" type='radio' id='yes' name='insurance' />
        <label htmlFor='yes'>Yes</label>
        <input onClick={handleChange} className="insurance" type='radio' id='no' name='insurance' />
        <label htmlFor='no'>No</label>
    </>
  );
}

export default ClientSignUp;
