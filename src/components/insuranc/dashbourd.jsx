import { connect } from 'react-redux';
import { Button} from '@material-ui/core';
import{NavLink} from 'react-router-dom' ;
const dashbored = (props) => {
  return (
    
    <div>
      <h1>insuranc company dashbored </h1>
      <NavLink exact  to="/subRequest">New subsecribtion Request</NavLink><br/>
      <NavLink exact  to="/pending-visit ">Pending Visits</NavLink><br/>
      <NavLink exact  to="/addNewPolicy">Add New Policy</NavLink><br/>

    </div>
  );
};



export default dashbored;