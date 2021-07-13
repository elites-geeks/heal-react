import { Form } from "react-bootstrap";
import './personalInfo.scss'

function ClientSignUp({ handleChange, formBody }) {
    return (
        <>
            <h3>Personal Information</h3>
            <Form.Group>
                <Form.Control
                    isInvalid={!formBody.firstname}
                    required
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    isInvalid={!formBody.lasttname}
                    required
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    isInvalid={!formBody.username}
                    required
                    name="username"
                    type="text"
                    placeholder="User Name"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    isInvalid={!formBody.date_of_birth}
                    required
                    type="date"
                    name="date_of_birth"
                    placeholder="DateOfBirth"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    isInvalid={!formBody.password}
                    required
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </Form.Group>
            
                <label style={{ margin: 0, marginRight: "2rem" }}>
                    I am
                </label>
                <input onClick={handleChange} required className="gender" value="male" type='radio' id='male' name='gender' />
                <label htmlFor='male'>Male</label>
                <input onClick={handleChange} required className="gender" value="female" type='radio' id='female' name='gender' />
                <label htmlFor='female'>Female</label>
            
        </>
    );
}

export default ClientSignUp;
