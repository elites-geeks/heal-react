import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import ContactInfo from './ContactInfo'
import UserType from './UserType';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PublishIcon from '@material-ui/icons/Publish';
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import { signUp } from "../../reducers/utils";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [pageNum, setPageNum] = useState(0);
  const [formBody, setFormBody] = useState({});
  const history = useHistory();
  const handleChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value });
  };
  const pages = [<PersonalInfo handleChange={handleChange} />, <ContactInfo handleChange={handleChange} />, <UserType handleChange={handleChange} />]
  return (
    <div style={{ height: '100vh', width: "100vw", display: "grid", placeItems: "center", paddingTop: "10rem" }}>
      <Card style={{ width: "24rem", height: "fit-content", background: '#333', color: '#aaa', borderColor: '#aaa', padding: "10px" }}>
        <Card.Body>
          <Form
            style={{ paddingTop: "1rem" }}
            onSubmit={(e) => {
              e.preventDefault()
              const user = signUp(formBody)
              if (user?.userProfile?.info?.role) {
                history.push(`/dashboard/${user.userProfile.info.role}`)
              } else {
                console.log("Error when sign up")
              }
            }}
          >
            <Card.Body>
              {pages[pageNum]}
            </Card.Body>
            {pageNum === 2 ? <button type="submit"> <PublishIcon /> SUBMIT</button> : null}
          </Form>
        </Card.Body>
      </Card>
      <div>
        <button onClick={() => setPageNum(pageNum - 1)} disabled={pageNum === 0 ? true : false}><ArrowBackIcon /></button>
        <button disabled={pageNum === 2 ? true : false} type="button" onClick={() => setPageNum(pageNum + 1)}><ArrowForwardIcon /></button>
      </div>
    </div>
  )
}

export default SignUp;
