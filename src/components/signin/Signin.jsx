import Card from "react-bootstrap/Card";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { If, Then, Else } from "react-if";
import { loginServer } from "../../actions/userActions";
import { useHistory, useLocation } from "react-router-dom";

import Loader from "../Loader/Loader";

function SignIn() {
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const signInHandler = async (username, password) => {
    const loggedIn = await dispatch(loginServer(username, password));
    if (loggedIn?.payload?.username) {
      history.replace({
        ...from,
        pathname:
          from.pathname === "/"
            ? `/dashboard/${loggedIn.payload.role}`
            : from.pathname,
      });
      setLoading(false)
    } else {
      setLoading(false)
    }
  };
  return (
    <>
      <If condition={loading === true}>
        <Then>
          <Loader />
        </Then>
        <Else>
          <div
            className="signCard"
            style={{ display: "grid", placeItems: "center" }}
          >
            <Card
              style={{
                width: "24rem",
                height: "fit-content",
                background: "#333",
                color: "#aaa",
                borderColor: "#aaa",
                padding: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>Sign In</Card.Title>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setLoading(true)
                    signInHandler(loginInfo.username, loginInfo.password);
                  }}
                >
                  <Form.Row>
                    <Form.Group as={Col}>
                      <Form.Label>User Name</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          setLoginInfo({
                            ...loginInfo,
                            username: e.target.value,
                          })
                        }
                        value={loginInfo.username}
                        required={true}
                        placeholder="username"
                        type="text"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          setLoginInfo({
                            ...loginInfo,
                            password: e.target.value,
                          })
                        }
                        value={loginInfo.password}
                        required={true}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                  </Form.Row>
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Else>
      </If>
    </>
  );
}

export default SignIn;
