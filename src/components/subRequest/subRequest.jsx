
import { Button} from '@material-ui/core';
import{NavLink} from 'react-router-dom' ;
const Request = (props) => {
  return (
    
    <div className='subRequest-container'>
      <h1>New subsecribtion Request </h1>
     <Button>Request-1</Button>  <br/> 
     {/* here on click render the pages */}
     <Button>Request-2</Button><br/>
     <Button>Request-3</Button>


    </div>
  );
};



export default Request;