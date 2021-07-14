import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Loading from '../Loader/Loader'
const baseURL = "https://elite-heal.herokuapp.com";


const Appointments = () => {
  const [loading, setLoading] = useState(true);
  const userid = useSelector((state) => state.userReducer.user.parentId);
  const [appointments, setappointments] = useState([]);
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
        },
      }).then(async (result) => {
        setappointments([...result.data]);
        setLoading(false)
      });
    }
  }, [userid]);
  const days = ["Sunday", "Monday", "Tuesday", 'Wednesday', "Thursday", "Friday", "Saturday"];
  const sortedAppointments = appointments.filter(elem => {
    const day = new Date(elem.elem.date)
    return day.getDay() !== 5;
  });
  sortedAppointments.sort(function (a, b) {
    const dateA = a.elem.date + ":" + a.elem.time;
    const dateB = b.elem.date + ":" + b.elem.time;
    return new Date(dateA) - new Date(dateB);
  });
  if (loading) {
    return (<>
      <Loading message="Please Wait..." />
    </>)
  } else {
    return (
      <>
        <div className="cards">
          {!sortedAppointments.length ? (<h1>no available appointments</h1>
          ) : (
            sortedAppointments.map((appoint, idx) => {
              return (
                <Card key={idx}>
                  <Card.Body>
                    <Card.Header><span className="cardTitle">Appointment</span> <span className={`badge ${days[new Date(appoint.elem.date).getDay()]}`}>{days[new Date(appoint.elem.date).getDay()]}</span></Card.Header>
                    <p style={{ marginTop: "2rem" }}>Date : {appoint.elem.date}</p>
                    <p>Time : {appoint.elem.time}</p>
                    <p>Patient Name : {appoint.patient.userProfile.firstname.toUpperCase()} {appoint.patient.userProfile.lastname.toUpperCase()}</p>
                    <p>Patient Phone Num : {appoint.patient.userProfile.info.phone_number}</p>
                  </Card.Body>
                </Card>
              );
            })
          )}
        </div>
      </>
    );
  }
};

export default Appointments;
