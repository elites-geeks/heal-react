import React, { useEffect,useState } from "react";

import { useSelector } from "react-redux";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { If, Then, Else } from "react-if";
import Loader from "../Loader/Loader";

const baseURL = "https://elite-heal.herokuapp.com";

const Appointments = () => {

  const [appointments, setappointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const userid = useSelector((state) => state.userReducer.user.parentId);
  useEffect(() => {
    setLoading(true)
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
    setLoading(false)
  }, [userid]);
  return (
    <If condition={loading === true}>
        <Then>
          <Loader message="get the appointments..." />
        </Then>
        <Else><div>
      
      {!appointments.length ? (
        <h1>no available appointments</h1>
      ) : (
        appointments.map((appoint) => {
          return (
            <Card>
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
   
</div></Else>
        </If>
    
  );
};

export default Appointments;
