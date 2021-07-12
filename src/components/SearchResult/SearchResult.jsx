import React , { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { reserveAppointment } from '../../reducers/utils'
import { useSelector } from "react-redux";
import io from 'socket.io-client'

const newAppointNotification = io('https://elite-heal.herokuapp.com/newAppointNotification');

const SearchResult = (props) => {
  useEffect(() => {
    newAppointNotification.on('new-appointment', payload => {
      console.log("From the socket", payload)
    })
  });
  const user = useSelector(state => state.userReducer.user)
  const location = useLocation()
  return (
    <Switch>
      <Route path="/dashboard/client/searchresult">
        <div >
          {
            location.state.docs.map((element, idx) => {
              return (
                <Card
                  key={idx}
                  style={{ width: "15rem", boxShadow: "4px 3px 3px #9E9E9E" }}
                >
                  <Card.Body>
                    <Card.Header>Doctor: {element.userProfile.firstname.toUpperCase() + " " + element.userProfile.lastname.toUpperCase()}</Card.Header>
                    <Card.Text>Specialty: {element.specialty}</Card.Text>
                    <Card.Text>Location: {element.clinicLocation}</Card.Text>
                    <Card.Text>Phone Num: {element.clinicPhoneNumber}</Card.Text>


                    <Button
                      style={{ marginLeft: "10rem" }}
                      variant="primary"
                      onClick={async () => {
                        console.log(user)
                        const reservation = await reserveAppointment({ docId: element._id, patientId: user.parentId, time: location.state.time, date: location.state.date })
                        console.log(reservation)
                        newAppointNotification.emit('new-appointment', reservation)
                      }}
                    >
                      reserve
                    </Button>
                  </Card.Body>
                </Card>
              )
            })
          }

        </div>
      </Route>
    </Switch>

  );
};



export default SearchResult;