import React from 'react'
import { Switch, /*Route*/ } from 'react-router-dom'
import './Main.scss'
// import Sign from '../../components/signin/Signin'
import SignUp from '../../components/SignUp/SignUp'

import ClientSignUp from '../../components/ClientSignUp/ClientSignUp'
import DoctorSignUp from '../../components/DoctorSignUp/DoctorSignUp'
import EmployeeSignUP from '../../components/EmployeeSignUP/EmployeeSignUP'

import DoctorProfile from '../../components/DoctorProfile/DoctorProfile'
import ClientProfile from '../../components/ClientProfile/ClientProfile'
// import Routes from '../../components/Route/Route'
function Main() {
    return (
        <Switch>
           {/* <Routes/> */}
           {/* <ClientProfile/> */}
           <DoctorProfile/>
            <div>
                Hello from main
            </div>
        </Switch>
        
    )
}

export default Main
