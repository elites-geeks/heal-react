import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClientProfile from '../../components/ClientProfile/ClientProfile';
import DoctorProfile from '../../components/DoctorProfile/DoctorProfile';
import InsuranceDashboard from '../../components/insuranc/dashbourd';
import AccountantProfile from '../../components/AccountantProfile/AccountantProfile';
import DoctorSwitch from '../DoctorSwitch/DoctorSwitch';
function Dashboards() {

    return (<>
        <DoctorSwitch />
        <Switch>
            <Route exact path='/dashboard/client'>
                <ClientProfile />
            </Route>
            <Route exact path='/dashboard/doctor'>
                <DoctorProfile />
            </Route>
            <Route exact path='/dashboard/accountant'>
                <AccountantProfile />
            </Route>
            <Route exact path='/dashboard/insuranceRep'>
                <InsuranceDashboard />
            </Route>

        </Switch></>)
}

export default Dashboards
