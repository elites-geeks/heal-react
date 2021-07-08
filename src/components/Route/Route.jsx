
import {Switch, Route} from 'react-router-dom';

import VisitType from '../VisitType/VisitType';
import SubscribeToInsuranceCompany from '../SubscribeToInsuranceCompany/SubscribeToInsuranceCompany';
import MakeDoctorVisit from '../MakeDoctorVisit/MakeDoctorVisit';
import DoctorVisitReceiption from '../DoctorVisitReceiption/DoctorVisitReceiption';
import Diagnosis from '../Diagnosis/Diagnosis' 
import DoctorProcedure from '../DoctorProcedure/DoctorProcedure'
import AccountantVisitReceiption from '../AccountantVisitReceiption/AccountantVisitReceiption'
function ClientProfile() {
    return (
      <>
      <Switch>
                <Route path="/makenewVisit">
                   <VisitType/>
                </Route>
                <Route path="/Subscribe">
                  <SubscribeToInsuranceCompany/>
                </Route>
                <Route path="/Doctor/visit">
                   <MakeDoctorVisit/>
                   </Route>
                   <Route path="/newVisitDoctor">
                   <DoctorVisitReceiption/>
                   </Route>
                   <Route path="/patient/history">
                  
                   </Route>
                   <Route path="/Write/dignoses">
                       <Diagnosis/>
                   </Route>
                   <Route path="/add/procedure">
                       <DoctorProcedure/>
                   </Route>
                   <Route path="/new/AccountantVisitReceiption">
                       <AccountantVisitReceiption/>
                   </Route>
            </Switch>
      </>
      
    );
  }
  
  export default ClientProfile;