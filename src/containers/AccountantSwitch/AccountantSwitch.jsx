import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AccountantVisitReceiption from '../../components/AccountantVisitReceiption/AccountantVisitReceiption'
import PatientReception from '../../components/patientReception/patientReception'
import InvoicesExported from '../../components/InvoicesExported/InvoicesExported';

function AccountantSwitch() {
    return (
        <Switch>
             <Route exact path={'/patientReception'}>
                <div className="dashboard">
                   <PatientReception/>
                </div>
            </Route>
            <Route exact path={'/new/AccountantVisitReceiption'}>
                <div className="dashboard">
                <AccountantVisitReceiption />
                    {/* <DoctorVisitReceiption /> */}
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
