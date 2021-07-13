import { Form } from "react-bootstrap";

function ClientSignUp({ handleChange }) {
    return (
        <>
            <Form.Group>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    name="phone_number"
                    placeholder="Phone Number"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    name="country"
                    placeholder="Address"
                    onChange={handleChange}
                />
            </Form.Group>
        </>
    );
}

export default ClientSignUp;
