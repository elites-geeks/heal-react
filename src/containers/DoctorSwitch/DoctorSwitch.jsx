import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoctorVisitReceiption from '../../components/DoctorVisitReceiption/DoctorVisitReceiption';
// import DoctorProcedures from '../../components/DoctorProcedure/DoctorProcedure'
import Appointments from '../../components/Appointments/Appointments';
function DoctorSwitch() {
    return (
        <Switch>
            <Route exact path={'/dashboard/doctor/newVisitDoctor'}>
                <div className="dashboard">
                    <DoctorVisitReceiption />
                </div>
            </Route>
            <Route exact path={'/dashboard/doctor/appointments'}>
                <div className="dashboard">
                    <Appointments />
                </div>
            </Route>
        </Switch>
    )
}

export default DoctorSwitch
