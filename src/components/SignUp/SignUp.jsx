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
import './SignUp.scss'

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
  async function handleSubmit(e) {
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
  }
  const pages = [<PersonalInfo formBody={formBody} handleChange={handleChange} />,
  <ContactInfo formBody={formBody} handleChange={handleChange} />,
  <UserType formBody handleChange={handleChange} />]
  function returnClass() {
    if (pageNum === 0) {
      return "register-personal"
    } else if (pageNum === 1) {
      return "register-contact"
    } else {
      return "register-user"
    }
  }
  return (
    <If condition={loading === true}>
      <Then>
        <Loader message="A moment please..." />
      </Then>
      <Else>
        <div className="register-container">
          <div className="register-form" >
            <Card   >
              <Card.Body>
                <Form
                  // style={{ paddingTop: "1rem", minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
                  onSubmit={handleSubmit}
                >
                  <div>
                    {pages[pageNum]}
                  </div>
                  {pageNum === 2 && formBody.type ? <button type="submit"> <PublishIcon /> SUBMIT</button> : null}
                </Form>
                <div className="formControl" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                  <button onClick={() => setPageNum(pageNum - 1)} disabled={pageNum === 0 ? true : false}><ArrowBackIcon /></button>
                  <h6>STEP {pageNum + 1} OF 3</h6>
                  {pageNum !== 2 ? <button type="button" onClick={() => setPageNum(pageNum + 1)}><ArrowForwardIcon /></button> : null}
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className={`register-image ${returnClass()}`} ></div>
        </div>
      </Else>
    </If>
  )
}

export default SignUp;