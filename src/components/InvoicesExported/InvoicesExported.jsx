// eslint-disable-next-line
import { Button, Table, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
const visitNum = (props) => {
  return (

    <div >
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Invoices Exported</Card.Title>

          <Card.Text>
            Patient Name:
          </Card.Text>
          <Card.Text>
            Total Payment:
          </Card.Text>
          <Card.Text>
            Procedure:
          </Card.Text>

        </Card.Body>
      </Card><br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Invoices Exported</Card.Title>

          <Card.Text>
            Patient Name:
          </Card.Text>
          <Card.Text>
            Total Payment:
          </Card.Text>
          <Card.Text>
            Procedure:
          </Card.Text>

        </Card.Body>
      </Card>

    </div>

  );
};



export default visitNum;