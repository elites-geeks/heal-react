import { Form } from "react-bootstrap";
import './personalInfo.scss'

function ClientSignUp({ handleChange }) {
    return (
        <>
            <Form.Group>
                <Form.Control
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    name="username"
                    type="text"
                    placeholder="User Name"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    name="date_of_birth"
                    placeholder="DateOfBirth"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </Form.Group>
            <label>
                I am ... 
            <input onClick={handleChange} className="gender" value="male" type='radio' id='male' name='gender' />
            <label  htmlFor='male'>Male</label>
            <input onClick={handleChange} className="gender" value="female" type='radio' id='female' name='gender' />
            <label  htmlFor='female'>Female</label>
            </label>
        </>
    );
}

export default ClientSignUp;
