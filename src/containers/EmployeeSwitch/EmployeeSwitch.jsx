import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EmployeeVisitReceiption from '../../components/EmployeeVisitReceiption/EmployeeVisitReceiption';

function EmployeeSwitch() {
    return (
        <Switch>
            <Route exact path={'/new/EmployeeVisitReceiption'}>
                <EmployeeVisitReceiption />
            </Route>
        </Switch>
    )
}

export default EmployeeSwitch
