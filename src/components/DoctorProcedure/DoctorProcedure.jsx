import React from 'react'

import {Link} from 'react-router-dom'
import Button from '../Buttonsignin/Button' 

function DoctorProcedure(props) {
    return (
        <div>
          <Link to='/Add/Lab'><Button placeHolder={'LAb'}/></Link>
          <Link to='/Add/Radiolagy'><Button placeHolder={'Radiolagy'}/></Link>
          <Link to='/Add/Pharmacy'><Button placeHolder={'Pharmacy'}/></Link>
          <Link to='/Add/Therapy'><Button placeHolder={'Therapy'}/></Link>
       </div>
    )
}

export default DoctorProcedure