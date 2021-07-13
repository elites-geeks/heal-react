import { Link, Switch, Route } from "react-router-dom";
import { Button ,Card} from 'react-bootstrap';
const Request = (props) => {
  return (
    <Switch>
       <Route path="">
    <div className='subRequest-container' style={{textAlign:'center'}}>
      <h1>New subsecription Request </h1>
      {/* ///// */}
    <div className="cardsReq" style={{display:"inline-flex"}}>
      <div style={{margin:"12px"}}>
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Request-1</Card.Title>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to='/RequestInsu'><Button>Go To Request-1</Button> </Link> <br />
    
  </Card.Body>
</Card>
</div>
{/* ///// */}
<div style={{margin:"12px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Request-2 </Card.Title>
   
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to='/RequestInsu'><Button>Go To Request-2</Button> </Link> <br />
    
  </Card.Body>
</Card>
</div>
{/* //// */}
<div style={{margin:"12px"}}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Request-3</Card.Title>
  
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to='/RequestInsu'><Button>Go To Request-3</Button> </Link> <br />
    
  </Card.Body>
</Card>
</div>
</div>
    </div>
    </Route>
      </Switch>
  );
};



export default Request;