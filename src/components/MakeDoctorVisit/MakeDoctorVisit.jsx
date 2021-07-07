import React from 'react'

import  Input  from '../InputName/Input'
import Button from '../Buttonsignin/Button' 

function DoctorVisit(props) {
    return (
        <div>
         <Input placeHolder={'Specality'}/>
         <Input placeHolder={'Time'}/>
         <Input placeHolder={'City'}/>
         <Button placeHolder={'search'}/>
       </div>
    )
}

export default DoctorVisit