import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
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
import Dashboards from '../dashboards/Dashboards'
import { useSelector } from 'react-redux';
import Head from '../../components/Head/Head'
// import Routes from '../../components/Route/Route'
function Main() {
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn)
    const userType = useSelector(state => state.userReducer.user.role);
    const history = useHistory()
    useEffect(() => {
        if (isLoggedIn) {
            history.push(`/dashboard/${userType}`)
        } else {
            history.push(`/`)
        }
    });
    return (
        <div style={{ flexGrow: 1 }}>
            <Dashboards />
            <Switch>
                <Route exact path='/'>
                    <Head />
                </Route>
                <Route path='/register'>
                    <SignUp />
                </Route>
                <Route path='/login'>
                    <SignIn />
                </Route>
            </Switch>
        </div>
    )
}

export default Main
