import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VisitType from '../../components/VisitType/VisitType';
import pendingProcedures from '../../components/pendingProcedures/pendingProcedures'
import Appointments from '../../components/Appointments/Appointments'
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
                <pendingProcedures />
            </div>
            </Route>
            <Route exact path={'/client/appointment/:id'}>
            <div className="dashboard">
                <Appointments />
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
