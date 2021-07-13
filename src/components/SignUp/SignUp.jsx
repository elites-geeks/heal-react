import React, { useEffect } from "react";
import { useState } from "react";
import { Switch, Case, Default, If, Then, Else } from "react-if";

import Card from "react-bootstrap/Card";

import UserType from "../UserType/UserType";

import ClientSignUp from "../ClientSignUp/ClientSignUp";
import DoctorSignUp from "../DoctorSignUp/DoctorSignUp";
import EmployeeSignUP from "../EmployeeSignUP/EmployeeSignUP";
import "./SignUp.scss";
import { Form } from "react-bootstrap";
import { signUp } from "../../reducers/utils";
import { useHistory, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

function SignUp() {
  let location = useLocation();
  let history = useHistory();
  let { from } = location.state || { from: { pathname: "/" } };

  const [userType, setUserType] = useState("");
  const [formBody, setFormBody] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUserType(formBody.type);
  }, [formBody]);
  const handleChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value });
  };

  return (
    <>
    

      <If condition={loading=== true}>
        <Then>
          <Loader />
        </Then>
        <Else>
        <div
            className="signCard"
            style={{
              display: "grid",
              placeItems: "center",
              height: "fit-content",
            }}
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
                <Form
                  style={{ paddingTop: "1rem" }}
                  onSubmit={async (e) => {
                    setLoading(true);
                    e.preventDefault();
                    const user = await signUp(formBody);
                    console.log(user);
                    if (user?.userProfile?.info?.role) {
                      setLoading(false);
                      history.push(`/dashboard/${user.userProfile.info.role}`);
                    } else {
                      setLoading(false);
                      console.log("Error when sign up");
                    }
                    history.replace({ ...from, pathname: from.pathname === "/" ? `/login` : from.pathname });
                  }}
                >
                  <h2>Sign Up</h2>
                  <UserType changeType={handleChange} />
                  <Switch>
                    <Case condition={userType === "client"}>
                      <Card.Body>
                        <ClientSignUp handleChange={handleChange} />
                      </Card.Body>
                    </Case>
                    <Case condition={userType === "doctor"}>
                      <Card.Body>
                        <DoctorSignUp handleChange={handleChange} />
                      </Card.Body>
                    </Case>
                    <Case condition={userType === "employee"}>
                      <Card.Body>
                        <EmployeeSignUP handleChange={handleChange} />
                      </Card.Body>
                    </Case>
                    <Default>
                      <Card.Body>Choose user type...</Card.Body>
                    </Default>
                  </Switch>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Else>
        
      </If>
    </>
  );
}

export default SignUp;
