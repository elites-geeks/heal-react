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
import { useHistory, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Else, If, Then } from 'react-if';

function SignUp() {
  const [pageNum, setPageNum] = useState(0);
  const [formBody, setFormBody] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const handleChange = (e) => {
    setFormBody({ ...formBody, [e.target.name]: e.target.value });
  };
  const pages = [<PersonalInfo handleChange={handleChange} />, <ContactInfo handleChange={handleChange} />, <UserType handleChange={handleChange} />]
  return (
    <If condition={loading === true}>
      <Then>
        <Loader />
      </Then>
      <Else>
        <div style={{ height: '100vh', width: "100vw", display: "grid", placeItems: "center", paddingTop: "10rem" }}>
          <Card style={{ width: "24rem", height: "fit-content", background: '#333', color: '#aaa', borderColor: '#aaa', padding: "10px" }}>
            <Card.Body>
              <Form
                style={{ paddingTop: "1rem" }}
                onSubmit={async (e) => {
                    setLoading(true);
                    e.preventDefault();
                    const user = await signUp(formBody);
                    if (user?.userProfile?.info?.role) {
                      setLoading(false);
                      history.push(`/dashboard/${user.userProfile.info.role}`);
                    } else {
                      setLoading(false);
                    }
                    history.replace({ ...from, pathname: from.pathname === "/" ? `/login` : from.pathname });
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
      </Else>
    </If>
  )
}

export default SignUp;