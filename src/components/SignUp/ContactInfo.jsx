import { Form } from "react-bootstrap";

function ClientSignUp({ handleChange, formBody }) {
    return (
        <>
        <h3>Contact Information</h3>
            <Form.Group>
                <Form.Control
                    required
                    isInvalid={!formBody.email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    required
                    isInvalid={!formBody.phone_number}
                    type="text"
                    name="phone_number"
                    placeholder="Phone Number"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    isInvalid={!formBody.country}
                    required
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
