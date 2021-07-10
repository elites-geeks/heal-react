import React from 'react';
import {  Switch } from 'react-router-dom';
import ClientProfile from '../../components/ClientProfile/ClientProfile';
import DoctorProfile from '../../components/DoctorProfile/DoctorProfile';
import InsuranceDashboard from '../../components/insuranc/dashbourd';
import AccountantProfile from '../../components/AccountantProfile/AccountantProfile';
import DoctorSwitch from '../DoctorSwitch/DoctorSwitch';
import ProtectedRoute from '../../components/ProtectedRoute';
import { useSelector } from 'react-redux';
function Dashboards() {
    const {isLoggedIn , user} = useSelector(state=>state.userReducer);
    return (<>
        <DoctorSwitch />
        <Switch>
            <ProtectedRoute exact path='/dashboard/client' isAuth={isLoggedIn&&user.role==='client'}>
                <ClientProfile />
            </ProtectedRoute>
            <ProtectedRoute exact path='/dashboard/doctor' isAuth={isLoggedIn&&user.role==='doctor'}>
                <DoctorProfile />
            </ProtectedRoute>
            <ProtectedRoute exact path='/dashboard/accountant' isAuth={isLoggedIn&&user.role==='account'}>
                <AccountantProfile />
            </ProtectedRoute>
            <ProtectedRoute exact path='/dashboard/insuranceRep' isAuth={isLoggedIn&&user.role==='insurance'}>
                <InsuranceDashboard />
            </ProtectedRoute>

        </Switch></>)
}

export default Dashboards
