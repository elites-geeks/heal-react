import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DoctorVisitReceiption from '../../components/DoctorVisitReceiption/DoctorVisitReceiption';
import InvoicesExported from '../../components/InvoicesExported/InvoicesExported';
function AccountantSwitch() {
    return (
        <Switch>
            <Route exact path={'/new/AccountantVisitReceiption'}>
                <div className="dashboard">
                    <DoctorVisitReceiption />
                </div>
            </Route>
            <Route exact path={'/InvoicesExported'}>
                <div className="dashboard">
                    <InvoicesExported />
                </div>
            </Route>

        </Switch>
    )
}

export default AccountantSwitch
