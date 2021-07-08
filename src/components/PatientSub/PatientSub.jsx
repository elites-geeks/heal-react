import React from 'react'

import {Link} from 'react-router-dom'
import Button from '../Buttonsignin/Button' 

function DoctorVisit(props) {
    return (
        <div>
          <Link to='/patient/history'><Button placeHolder={'View patient history'}/></Link>
          <Link to='/Write/dignoses'><Button placeHolder={'Write dignoses'}/></Link>
          <Link to='/add/procedure'><Button placeHolder={'add procedure'}/></Link>
       </div>
    )
}

export default DoctorVisit