import React,{ useState } from "react";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from 'react-router-dom';

function DoctorVisit(props) {
  let location = useLocation();
  let history = useHistory();
  const [search, setSearch] = useState({});
  console.log('search',search)
  let { from } = location.state || { from: { pathname: "/Doctor/visit" } };
  const submitHandler = async () => {

history.replace({ ...from, pathname: from.pathname === "/Doctor/visit" ? `/dashboard/client/searchresult` : from.pathname });
  }
  return (
    <div>
      <Form onSubmit={e => {
            e.preventDefault();
            submitHandler();
          }}>
        <Form.Group >
          <Form.Control type="text" name="specality" placeholder="Specality" onChange={e => setSearch( {...e.target.value} )}/>
        </Form.Group>

        <Form.Group >
          <Form.Control type="text" name="time" placeholder="Time" onChange={e => setSearch( {...e.target.value})}/>
        </Form.Group>

        <Form.Group >
          <Form.Control type="text" name="city" placeholder="City" onChange={e => setSearch( {...e.target.value})} />
        </Form.Group>

        <Button variant="primary" type="submit">
          search
        </Button>
      </Form>
    </div>
  );
}

export default DoctorVisit;
