import React from 'react'

import {Link} from 'react-router-dom'
import Button from '../Buttonsignin/Button' 

function DoctorVisit(props) {
    return (
        <div>
          <Link to='/patient/history'><Button placeHolder={'View patient history'}/></Link>
          <Link to='/PolicyChosen'><Button placeHolder={'Policy Chosen'}/></Link>
         <Button placeHolder={'Accept'}/>
         <Button placeHolder={'Reject'}/>
       </div>
    )
}

export default DoctorVisit