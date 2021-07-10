import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VisitType from '../../components/VisitType/VisitType';
import pendingProcedures from '../../components/pendingProcedures/pendingProcedures'
import Appointments from '../../components/Appointments/Appointments'
import ClientProcedures from '../../components/ClientProcedures/ClientProcedures'
import SubscribeToInsuranceCompany from '../../components/SubscribeToInsuranceCompany/SubscribeToInsuranceCompany'

function ClientSwitch() {
    return (
        <Switch>
            <Route exact path={'/makenewVisit'}>
                <VisitType />
            </Route>
            <Route exact path={'/viewPendingProcedures'}>
                <pendingProcedures/>
            </Route>
            <Route exact path={'/client/appointment/:id'}>
                <Appointments/>
            </Route>
            <Route exact path={'/client/procedures/:id'}>
                <ClientProcedures/>
            </Route>
            <Route exact path={'/Subscribe'}>
                <SubscribeToInsuranceCompany/>
            </Route>
        </Switch>
    )
}

export default ClientSwitch
