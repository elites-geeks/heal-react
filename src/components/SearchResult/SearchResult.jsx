import React , { useEffect,useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import { reserveAppointment } from '../../reducers/utils'
import { useSelector } from "react-redux";
import io from 'socket.io-client'
import { useHistory, useLocation } from "react-router-dom";
import { If, Then} from "react-if";
import Loader from "../Loader/Loader";
const newAppointNotification = io('https://elite-heal.herokuapp.com/newAppointNotification');

const SearchResult = (props) => {

  const [loading, setLoading] = useState(false);
 
  const history = useHistory();

 

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
      <>
        <div className="cards" >
          {
            location.state.docs.map((element, idx) => {
              return (
                <Card
                  key={idx}
                >
                  <Card.Body>
                    <Card.Header>Doctor: {element.userProfile.firstname.toUpperCase() + " " + element.userProfile.lastname.toUpperCase()}</Card.Header>
                    <Card.Text>Specialty: {element.specialty}</Card.Text>
                    <Card.Text>Location: {element.clinicLocation}</Card.Text>
                    <Card.Text>Phone Num: {element.clinicPhoneNumber}</Card.Text>


                    <Button
                      variant="primary"
                      onClick={async () => {
                        setLoading(true)
                        const reservation = await reserveAppointment({ docId: element._id, patientId: user.parentId, time: location.state.time, date: location.state.date })
                        newAppointNotification.emit('new-appointment', reservation)
                        history.push(`/client/appointment`);
                        setLoading(false)
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
        <If condition={loading === true}>
        <Then>
          <Loader message="reseving ..." />
        </Then>
      </If>
      </>
      </Route>
    </Switch>

  );
};



export default SearchResult;