import React, { useEffect } from "react";
import { useState } from "react";
import { Switch, Case, Default } from "react-if";
import Card from "react-bootstrap/Card";

import UserType from "../UserType/UserType";

import ClientSignUp from "../ClientSignUp/ClientSignUp";
import DoctorSignUp from "../DoctorSignUp/DoctorSignUp";
import EmployeeSignUP from "../EmployeeSignUP/EmployeeSignUP";
import "./SignUp.scss";
import { Form } from "react-bootstrap";
import { signUp } from "../../reducers/utils";

function SignUp() {
  const [userType, setUserType] = useState('');
  const [formBody, setFormBody] = useState({});
  useEffect(() => {
    setUserType(formBody.type)
  }, [formBody])
  const handleChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div id="signUpCard" style={{ display: 'grid', placeItems: 'center', height: 'fit-content' }}>
        <Card style={{ width: "24rem", height: "fit-content", padding: "10px" }}>
          <Card.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                signUp(formBody)
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
                  <DoctorSignUp handleChange={handleChange} />
                </Case>
                <Case condition={userType === "employee"}>
                  <EmployeeSignUP handleChange={handleChange} />
                </Case>
                <Default>choose user Type</Default>
              </Switch>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
