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
import { useHistory } from "react-router-dom";


function SignUp() {
  const [userType, setUserType] = useState('');
  const [formBody, setFormBody] = useState({});
  useEffect(() => {
    setUserType(formBody.type)
  }, [formBody])
  const handleChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value });
  };
  const history = useHistory();
  return (
    <>
      <div className="signCard" style={{ display: 'grid', placeItems: 'center', height: 'fit-content' }}>
        <Card style={{ width: "24rem", height: "fit-content", background: '#333', color: '#aaa', borderColor: '#aaa', padding: "10px" }}>
          <Card.Body>
            <Form
            style={{paddingTop:"1rem"}}
              onSubmit={(e) => {
                e.preventDefault()
                const user =signUp(formBody)
                console.log("user Sign up")
                if(user?.userProfile?.info?.role){
                  history.push(`/dashboard/${user.userProfile.info.role}`)
                }else{
                  console.log("Error when sign up") 
                }
              }}
            >
              <h2>Sign Up</h2>
              <UserType  changeType={handleChange} />
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
                  <Card.Body>
                    Choose user type...
                  </Card.Body>
                </Default>
              </Switch>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
