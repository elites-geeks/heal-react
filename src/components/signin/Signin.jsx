import Card from 'react-bootstrap/Card';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { loginServer } from '../../actions/userActions'
import { useHistory, useLocation } from 'react-router-dom';
function SignIn() {
  console.log("I am in login")
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };
  console.log(from)
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const dispatch = useDispatch()
  const signInHandler = async (username, password) => {
    const loggedIn = await dispatch(loginServer(username, password))
    if (loggedIn?.payload?.username) {
      history.replace({ ...from, pathname: from.pathname === "/" ? `/dashboard/${loggedIn.payload.role}` : from.pathname });
    } else {
      console.log("error logged in")
    }
  }
  return (
    <div className="signCard" style={{ display: 'grid', placeItems: 'center', }}>
      <Card style={{ width: "24rem", height: "fit-content", background: '#333', color: '#aaa', borderColor: '#aaa', padding: "10px" }}>
        <Card.Body>
          <Card.Title>Sign In</Card.Title>
          <Form onSubmit={e => {
            e.preventDefault();
            signInHandler(loginInfo.username, loginInfo.password)
          }}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>User Name</Form.Label>
                <Form.Control onChange={e => setLoginInfo({ ...loginInfo, username: e.target.value })} value={loginInfo.username} required={true} placeholder="username" type="text" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={e => setLoginInfo({ ...loginInfo, password: e.target.value })} value={loginInfo.password} required={true} type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignIn;