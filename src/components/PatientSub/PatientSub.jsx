import React from 'react'

import {Link} from 'react-router-dom'
import Button from '../Buttonsignin/Button' 

function DoctorVisit(props) {
    return (
        <div>
          <Link to='/patient/history'><Button placeHolder={'View patient history'}/></Link>
          <Link to='/Write/dignoses'><Button placeHolder={'Write dignoses'}/></Link>
         <Button placeHolder={'add procedure'}/>
       </div>
    )
}

export default DoctorVisit