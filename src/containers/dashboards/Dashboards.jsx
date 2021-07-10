import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ClientProfile from '../../components/ClientProfile/ClientProfile';
import DoctorProfile from '../../components/DoctorProfile/DoctorProfile';
import InsuranceDashboard from '../../components/insurance/dashboard';
import AccountantProfile from '../../components/AccountantProfile/AccountantProfile';

import DoctorSwitch from '../DoctorSwitch/DoctorSwitch';
import ClientSwitch from '../ClientSwitch/ClientSwitch';
import AccountantSwitch from '../AccountantSwitch/AccountantSwitch'
import InsuranceSwitch from '../InsuranceSwitch/InsuranceSwitch'


function Dashboards() {

    return (<>
        <DoctorSwitch />
        <ClientSwitch/>
        <AccountantSwitch/>
        <InsuranceSwitch/>
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
