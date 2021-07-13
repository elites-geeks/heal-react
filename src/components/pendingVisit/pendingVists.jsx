import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
// import { useHistory, useLocation } from 'react-router-dom';
const pendingVisits = (props) => {
  return (

    <div className='subRequest-container'>
      {/* ///// */}
      <div className="cardsPending" style={{display:"inline-flex", marginTop:"7rem"}}>
      <div>
       <Card style={{ width: '18rem',margin:'12px'}}>
        <Card.Body>
          <Card.Title>Pending...</Card.Title>
          <Card.Text>
            Patient ID:23
          </Card.Text>
          <Card.Text>
          Patient Name: mohammad
          </Card.Text>
          <Card.Text>
            Doctor: areen
          </Card.Text>
          <Card.Text>
            Diagnoses: nothing
          </Card.Text>

        </Card.Body>
        <Button variant="success" style={{width:"100%",borderRadius:"0px"}}>Accepet</Button>
  <Button variant="danger" >Rejects</Button>
      </Card>
      </div>
      {/* ///// */}
      <div>
      <Card style={{ width: '18rem',margin:'12px'}}>
        <Card.Body>
          <Card.Title>Pending...</Card.Title>
          <Card.Text>
            Patient ID: 24
          </Card.Text>
          <Card.Text>
          Patient Name: ali
          </Card.Text>
          <Card.Text>
            Doctor: omar
          </Card.Text>
          <Card.Text>
            Diagnoses: nothing
          </Card.Text>

        </Card.Body>
  <Button variant="success" style={{width:"100%",borderRadius:"0px"}}>Accepet</Button>
  <Button variant="danger">Rejects</Button>
      </Card>
      </div>
      </div>
    </div>

  );
};



export default pendingVisits;