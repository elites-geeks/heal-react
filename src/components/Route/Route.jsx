
import {Switch, Route} from 'react-router-dom';

import VisitType from '../VisitType/VisitType';
import SubscribeToInsuranceCompany from '../SubscribeToInsuranceCompany/SubscribeToInsuranceCompany';
import MakeDoctorVisit from '../MakeDoctorVisit/MakeDoctorVisit';
import DoctorVisitReceiption from '../DoctorVisitReceiption/DoctorVisitReceiption';
import Diagnosis from '../Diagnosis/Diagnosis' 
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
            </Switch>
      </>
      
    );
  }
  
  export default ClientProfile;