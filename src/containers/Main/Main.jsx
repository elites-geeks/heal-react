import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './Main.scss'
// import Sign from '../../components/signin/Signin'
import SignUp from '../../components/SignUp/SignUp'
// import { login, userType } from '../../actions/userActions'
// import Dashbored from '../../components/insuranc/dashbourd'
// import ClientSignUp from '../../components/ClientSignUp/ClientSignUp'
// import DoctorSignUp from '../../components/DoctorSignUp/DoctorSignUp'
// import EmployeeSignUP from '../../components/EmployeeSignUP/EmployeeSignUP'
// import Request from '../../components/subRequest/subRequest'
// import PendingVisits from '../../components/pendingVisit/pendingVists'
// import AddNewPolicy from '../../components/addNewPolicy/addNewPolicy'
// import DoctorProfile from '../../components/DoctorProfile/DoctorProfile'
// import ClientProfile from '../../components/ClientProfile/ClientProfile'
import SignIn from '../../components/signin/Signin'
import Head from '../../components/Head/Head'
// import Routes from '../../components/Route/Route'
function Main() {
    const isLoggedIn = useSelector(state=>state.isLoggedIn)
    const userType = useSelector(state=>state.userType)
    return (
        <>
        <Switch>
            <Route exact path='/'>
                {isLoggedIn? <div></div> :(<div className="head">
                    <Head />
                </div>)}
                
            </Route>
            <Route path='/register'>
                <SignUp />
            </Route>
            <Route path='/login'>
                <SignIn/>
            </Route>
        </Switch>
</>
    )
}

export default Main
