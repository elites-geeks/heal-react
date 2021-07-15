import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Loading from '../Loader/Loader'
const baseURL = "https://elite-heal.herokuapp.com";

const Appointments = () => {
  const [loading, setLoading] = useState(true);

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
        },
      }).then(async (result) => {
        setappointments([...result.data]);
        setLoading(false)
      });
    }

  }, [userid]);
  const sortedAppointments = appointments.filter(elem => {
    const day = new Date(elem.elem.date).getDay()
    return day !== 5;
  });
  sortedAppointments.sort(function (a, b) {
    const dateA = a.elem.date + ":" + a.elem.time;
    const dateB = b.elem.date + ":" + b.elem.time;
    return new Date(dateA) - new Date(dateB);
  });
  const days = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"];
  if (loading) {
    return (<>
      <Loading message="Please Wait..." />
    </>)
  } else {
    console.log(sortedAppointments)
    return (
      <div className="cards">
         {!sortedAppointments.length ? (
          <h1>no available appointments</h1>
        ) : (
          sortedAppointments.map((appoint, idx) => {
            return (
              <Card key={idx}>
                <Card.Body>
                  <Card.Header><span className="cardTitle">Appointment</span> <span className={`badge ${days[new Date(appoint.elem.date).getDay()]}`}>{days[new Date(appoint.elem.date).getDay()]}</span></Card.Header>
                  <p style={{ marginTop: "2rem" }}>Doctor : {appoint.doc.userProfile.firstname.toUpperCase()} {appoint.doc.userProfile.lastname.toUpperCase()}</p>
                  <p>Date : {appoint.elem.date}</p>
                  <p>Time : {appoint.elem.time}</p>
                  <p>Phone Number : {appoint.doc.clinicPhoneNumber}</p>
                  <p>Location : {appoint.doc.clinicLocation}</p>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    );
  }
};

export default Appointments;
