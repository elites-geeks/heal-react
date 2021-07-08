import React from 'react'
import { Switch, /*Route*/ } from 'react-router-dom'
import './Main.scss'
// import Sign from '../../components/signin/Signin'
import SignUp from '../../components/SignUp/SignUp'
import Dashbored from '../../components/insuranc/dashbourd'
import ClientSignUp from '../../components/ClientSignUp/ClientSignUp'
import DoctorSignUp from '../../components/DoctorSignUp/DoctorSignUp'
import EmployeeSignUP from '../../components/EmployeeSignUP/EmployeeSignUP'
import Request from '../../components/subRequest/subRequest'
import PendingVisits from '../../components/pendingVisit/pendingVists'
import AddNewPolicy from '../../components/addNewPolicy/addNewPolicy'
import DoctorProfile from '../../components/DoctorProfile/DoctorProfile'
import ClientProfile from '../../components/ClientProfile/ClientProfile'
// import Routes from '../../components/Route/Route'
function Main() {
    return (
        <Switch>
           {/* <Routes/> */}
           {/* <ClientProfile/> */}
           <DoctorProfile/>
        </Switch>
        
    )
}

export default Main
