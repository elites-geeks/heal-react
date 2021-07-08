import { Button} from '@material-ui/core';
import{NavLink} from 'react-router-dom' ;
const pendingVisits = (props) => {
  return (
    
    <div className='subRequest-container'>
     <div>
         <span>patient id</span><br/>
         <span>patient name</span><br />
         <span>doctor name</span><br />
     </div>
     <div>
     <span>patient id</span><br />
         <span>patient name</span><br />
         <span>doctor name</span><br />
     </div>
     <Button variant="primary">view</Button>
    </div>
   
  );
};



export default pendingVisits;