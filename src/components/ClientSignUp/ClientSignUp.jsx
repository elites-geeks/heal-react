import { Form } from "react-bootstrap";
import './ClientSignUp.scss'

function ClientSignUp({ handleChange }) {
  return (
    <>

      <Form.Group>
        <Form.Control
          required
          name="img"
          type="text"
          placeholder="Upload image"
          onChange={handleChange}
        />
      </Form.Group>
      <label>
        Are you subscribed to insurance company?
        <input onClick={handleChange} className="insurance" type='radio' id='yes' name='insurance' />
        <label htmlFor='yes'>Yes</label>
        <input onClick={handleChange} className="insurance" type='radio' id='no' name='insurance' />
        <label htmlFor='no'>No</label>
      </label>
    </>
  );
}

export default ClientSignUp;
