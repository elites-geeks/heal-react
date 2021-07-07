import React from 'react'
import { Switch, /*Route*/ } from 'react-router-dom'
import './Main.scss'
// import Sign from '../../components/signin/Signin'
import SignUp from '../../components/SignUp/SignUp'
import dashbored from '../../components/insuranc/dashbourd'
import ClientSignUp from '../../components/ClientSignUp/ClientSignUp'
import DoctorSignUp from '../../components/DoctorSignUp/DoctorSignUp'
import EmployeeSignUP from '../../components/EmployeeSignUP/EmployeeSignUP'
function Main() {
    return (
        <Switch>
            {/* <Sign/> */}
            <SignUp/>
            <dashbored/>
            {/* <ClientSignUp/> */}
           {/* <DoctorSignUp/> */}
           {/* <EmployeeSignUP/> */}
            <div>
                Hello from main
            </div>
        </Switch>
    )
}

export default Main
