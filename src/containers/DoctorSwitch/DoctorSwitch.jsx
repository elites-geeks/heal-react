import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoctorVisitReceiption from '../../components/DoctorVisitReceiption/DoctorVisitReceiption';
// import DoctorProcedures from '../../components/DoctorProcedure/DoctorProcedure'
import DoctorProcedure from '../../components/DoctorProcedure/DoctorProcedure';
function DoctorSwitch() {
    return (
        <Switch>
            <Route exact path={'/dashboard/doctor/newVisitDoctor'}>
                <DoctorVisitReceiption />
            </Route>
            <Route exact path={'/dashboard/doctor/appointments'}>
                <DoctorProcedure/>
            </Route>
        </Switch>
    )
}

export default DoctorSwitch
