import React, { useEffect } from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "react-bootstrap/Card";
const baseURL = "https://elite-heal.herokuapp.com";

const Appointments = () => {
  const [appointments, setappointments] = useState([]);
  console.log(appointments)
  const userid = useSelector((state) => state.userReducer.user.parentId);
  console.log(userid)
  useEffect(() => {
    fetchMyAPI();
    async function fetchMyAPI() {
      await axios({
        baseURL: baseURL,
        url: `/doctor/appointment/${userid}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": baseURL,
        }
      }).then(async (result) => {
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
