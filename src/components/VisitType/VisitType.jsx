import React from 'react'
import {Link} from 'react-router-dom'

import  Button  from '../Buttonsignin/Button'


function VisitType() {
    return (
      <>
      <h1>Visit Type</h1>
     <Link to='/Doctor/visit'><Button placeHolder={'Doctor Visit'}/></Link> 
      <Button placeHolder={'SelfVisit'}/>
    
      </>
      
    );
  }
  
  export default VisitType;