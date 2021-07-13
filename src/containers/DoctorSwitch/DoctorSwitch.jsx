import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DoctorVisitReceiption from '../../components/DoctorVisitReceiption/DoctorVisitReceiption';
// import DoctorProcedures from '../../components/DoctorProcedure/DoctorProcedure'
import Appointments from '../../components/Appointments/Appointments';
import PatientSub from '../../components/PatientSub/PatientSub';
import Diagnosis from '../../components/Diagnosis/Diagnosis';
import AddProcedure from '../../components/AddProcedure/AddProcedure';

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
            <Route exact path={'/dashboard/doctor/patientSub'}>
                <div className="dashboard">
                    <PatientSub />
                </div>
            </Route>
            <Route exact path={'/dashboard/doctor/diagnosis'}>
                <div className="dashboard">
                    <Diagnosis />
                </div>
            </Route>
            <Route exact path={'/dashboard/doctor/add/procedure'}>
                    <AddProcedure />
            </Route>
        </Switch>
    )
}

export default DoctorSwitch
