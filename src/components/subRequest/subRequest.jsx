import { Link, Switch, Route } from "react-router-dom";
import { Button } from 'react-bootstrap';
const Request = (props) => {
  return (
    <Switch>
       <Route path="">
    <div className='subRequest-container' style={{textAlign:'center'}}>
      <h1>New subsecription Request </h1>
      <Link to='/RequestInsu'><Button>Request-1</Button> </Link> <br />
      <Button style={{margin:'50px auto'}}>Request-2</Button><br />
      <Button>Request-3</Button>
    
    </div>
    </Route>
      </Switch>
  );
};



export default Request;