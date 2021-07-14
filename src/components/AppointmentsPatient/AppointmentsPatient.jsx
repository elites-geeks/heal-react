import React, { useEffect } from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "react-bootstrap/Card";
const baseURL = "https://elite-heal.herokuapp.com";

const Appointments = () => {
  const [appointments, setappointments] = useState([]);
  const userid = useSelector((state) => state.userReducer.user.parentId);
  useEffect(() => {
    fetchMyAPI();
    async function fetchMyAPI() {
      await axios({
        baseURL: baseURL,
        url: `/patient/appointment/${userid}`,
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
    <div className="cards">
      
          {!appointments.length ? (
            <h1>no available appointments</h1>
          ) : (
            appointments.map((appoint, idx) => {
              return (
                <Card key={idx}>
                  <Card.Body>
                  <Card.Header>Appointment</Card.Header>
                    <p>Doctor : {appoint.doc.userProfile.firstname.toUpperCase()} {appoint.doc.userProfile.lastname.toUpperCase()}</p>
                    <p>Date : {appoint.elem.date}</p>
                    <p>Time : {appoint.elem.time}</p>
                    <p>Phone Number : {appoint.elem.clinicPhoneNumber}</p>
                    <p>Location : {appoint.doc.clinicLocation}</p>
                  </Card.Body>
                </Card>
              );
            })
          )}
       
    </div>
  );
};

export default Appointments;
