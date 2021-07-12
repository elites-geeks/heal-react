import React, { useEffect } from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Card from "react-bootstrap/Card";
const baseURL = "https://elite-heal.herokuapp.com";

const Appointments = (props) => {
  const [appointments, setappointments] = useState([]);
  const userid = useSelector((state) => state.userReducer.user.id);
  useEffect(() => {
    async function fetchMyAPI() {
      await axios({
        baseURL: baseURL,
        url: `/doctor/appointment/${userid}`,
        method: "get",
      }).then(async (result) => {
        setappointments([...result.data]);
      });

    }
    fetchMyAPI();
  }, [userid]);
  return (
    <div>
      <Card style={{ width: "24rem", height: "fit-content", padding: "10px" }}>
        <Card.Body>
          {!appointments.length ? (
            <h1>no available appointments</h1>
          ) : (
            appointments.map((appoint) => {
              return (
                <Card
                  style={{
                    width: "24rem",
                    height: "fit-content",
                    padding: "10px",
                  }}
                >
                  <Card.Body>
                    <p>{appoint.time}</p>
                    <p>{appoint.date}</p>
                    <p>{appoint.patient}</p>
                  </Card.Body>
                </Card>
              );
            })
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Appointments;
