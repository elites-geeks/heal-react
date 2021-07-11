// eslint-disable-next-line
import { Button ,Table} from 'react-bootstrap';
import { Link } from 'react-router-dom'
const patientReception = (props) => {
  return (

    <div >
      <Table striped bordered hover style={{ width: "30rem", height: "fit-content", padding: "10px",color:"white" }}>
  <thead>
    <tr>
      <th>#</th>
      <th colSpan="2">Procedure</th>
    
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td colSpan="2"></td>
      
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td colSpan="2"></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2"></td>
      <td></td>
    </tr>
    <tr>
      <td>4</td>
      <td colSpan="2"></td>
      <td></td>
    </tr>
    <tr>
      <td>5</td>
      <td colSpan="2"></td>
      <td></td>
    </tr>
  </tbody>
</Table>
<span style={{color:"white" ,marginLeft:"22rem"}}>Total-JD:{}</span><br />
<Link to='/dashboard/account'><Button >Leave</Button></Link>

<Button style={{marginLeft:"5rem"}} >Confirm Payment</Button>

    </div>

  );
};



export default patientReception;