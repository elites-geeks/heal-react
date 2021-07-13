import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VisitType from '../../components/VisitType/VisitType';
import PendingProcedures from '../../components/pendingProcedures/pendingProcedures'
import AppointmentsPatient from '../../components/AppointmentsPatient/AppointmentsPatient'
import ClientProcedures from '../../components/ClientProcedures/ClientProcedures'
import SubscribeToInsuranceCompany from '../../components/SubscribeToInsuranceCompany/SubscribeToInsuranceCompany'
import MakeDoctorVisit from '../../components/MakeDoctorVisit/MakeDoctorVisit'
import SearchResult from '../../components/SearchResult/SearchResult';
function ClientSwitch() {
    return (
        <Switch>
            <Route exact path={'/makenewVisit'}>
                <div className="dashboard">
                    <VisitType />
                </div>
            </Route>
            <Route exact path={'/viewPendingProcedures'}>
            <div className="dashboard">
                <PendingProcedures />
            </div>
            </Route>
            <Route exact path={'/client/appointment'}>
            <div className="dashboard">
                <AppointmentsPatient />
            </div>
            </Route>
            <Route exact path={'/client/procedures/:id'}>
            <div className="dashboard">
                <ClientProcedures />
            </div>
            </Route>
            <Route exact path={'/Subscribe'}>
            <div className="dashboard">
                <SubscribeToInsuranceCompany />
            </div>
            </Route>
            <Route exact path={'/Doctor/visit'}>
            <div className="dashboard">
                <MakeDoctorVisit />
            </div>
            </Route>
            <Route exact path={'/dashboard/client/searchresult'}>
            <div className="dashboard">
                < SearchResult/>
            </div>
            </Route>
        </Switch>
    )
}

export default ClientSwitch
