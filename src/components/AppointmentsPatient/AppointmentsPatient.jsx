import React, { useEffect } from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "react-bootstrap/Card";
const baseURL = "https://elite-heal.herokuapp.com";

const Appointments = (props) => {
  const [appointments, setappointments] = useState([]);
  const userid = useSelector((state) => state.userReducer.user.parentId);
  const user = useSelector((state) => state.userReducer.user);
  console.log('user',user)
  useEffect(() => {
    console.log('userid',userid)
    console.log('inside use effect')
    fetchMyAPI();
    async function fetchMyAPI() {
      console.log('fetchMyAPI')
      await axios({
        baseURL: baseURL,
        url: `/patient/appointment/${userid}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": baseURL,
        }
      }).then(async (result) => {
        console.log('result.data',result.data)
        setappointments([...result.data]);
      });

    }
   
  }, [userid]);
  return (
    <div>
      
          {!appointments.length ? (
            <h1>no available appointments</h1>
          ) : (
            appointments.map((appoint) => {
              return (
                <Card
                  style={{
                    width: "20rem",
                    height: "fit-content",
                    padding: "10px",
                  }}
                >
                  <Card.Body>
                  <Card.Header>Appointment</Card.Header>
                    <p>date : {appoint.elem.date}</p>
                    <p>time : {appoint.elem.time}</p>
                    <p>name : {appoint.patient.userProfile.firstname} {appoint.patient.userProfile.lastname}</p>
                  </Card.Body>
                </Card>
              );
            })
          )}
       
    </div>
  );
};

export default Appointments;
