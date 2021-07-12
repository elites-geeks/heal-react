import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from 'react-router-dom';
import { searchForDoctor } from '../../reducers/utils'
import { Search } from "react-bootstrap-icons";

function DoctorVisit() {
  let location = useLocation();
  let history = useHistory();
  const [search, setSearch] = useState({});
  let { from } = location.state || { from: { pathname: "/Doctor/visit" } };
  const submitHandler = async () => {
    
    const docs = await searchForDoctor({ ...Search, date: search.date + ":" + search.time, location: search.location.toLowerCase(), specialty: search.specialty.toLowerCase() })
    history.replace({ ...from, state: {docs,time:search.date + ":" + search.time,date:search.date + ":" + search.time}, pathname: from.pathname === "/Doctor/visit" ? `/dashboard/client/searchresult` : from.pathname });
  }
  return (
    <div>
      <Form onSubmit={e => {
        e.preventDefault();
        submitHandler();
      }}>
        <Form.Group >
          <Form.Control required={true} type="text" name="specialty" placeholder="Specialty" onChange={e => setSearch({ ...search, [e.target.name]: e.target.value })} />
        </Form.Group>

        <Form.Group >
          <Form.Control required={true} type="time" name="time" placeholder="Time" onChange={e => setSearch({ ...search, [e.target.name]: e.target.value })} />
        </Form.Group>
        <Form.Group >
          <Form.Control required={true} type="date" name="date" placeholder="Date" onChange={e => setSearch({ ...search, [e.target.name]: e.target.value })} />
        </Form.Group>

        <Form.Group >
          <Form.Control required={true} type="text" name="location" placeholder="City" onChange={e => setSearch({ ...search, [e.target.name]: e.target.value })} />
        </Form.Group>

        <Button variant="primary" type="submit">
          search
        </Button>
      </Form>
    </div>
  );
}

export default DoctorVisit;
