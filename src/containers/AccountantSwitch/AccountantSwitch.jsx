import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DoctorVisitReceiption from '../../components/DoctorVisitReceiption/DoctorVisitReceiption';
import InvoicesExported from '../../components/InvoicesExported/InvoicesExported';
function AccountantSwitch() {
    return (
        <Switch>
            <Route exact path={'/new/AccountantVisitReceiption'}>
                <DoctorVisitReceiption />
            </Route>
            <Route exact path={'/InvoicesExported'}>
                <InvoicesExported/>
            </Route>
         
        </Switch>
    )
}

export default AccountantSwitch
