
import React, { useEffect } from "react";

import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import Card from "react-bootstrap/Card";
const baseURL = "https://elite-heal.herokuapp.com";

const Appointments = (props) => {
  const [appointments,setappointments]=useState();
  const userid = useSelector(state => state.userReducer.user.id)
  useEffect( () =>
  {async function fetchMyAPI(){
   console.log(userid)
   await axios({
      baseURL: baseURL,
      url: `/doctor/appointment/${userid}`,
      method: "get"
    }).then(async(result)=>{
          console.log(result)
          console.log(result.data)
   setappointments([...result.data])
  
    })
    // console.log(result.data)
    // setappointments(await Promise.all( [...result.data]))
    
  }
  fetchMyAPI();
  },[])
  console.log('appointments',appointments)
  return (

    <div >
       <Card style={{ width: "24rem", height: "fit-content", padding: "10px" }}>
          <Card.Body>
      {/* {!appointments.length?<h1>no available appointments</h1>:appointments.map((appointment)=>{
        
        <ListGroup.Item>appointment.time</ListGroup.Item>
        <ListGroup.Item>appointment.date<ListGroup.Item>
        <ListGroup.Item>appointment.patient:patient</ListGroup.Item>
      })
       
      } */}
      </Card.Body>
      </Card>
    </div>

  );
}



export default Appointments;