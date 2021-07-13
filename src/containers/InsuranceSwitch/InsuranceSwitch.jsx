import React from "react";
import { Route, Switch } from "react-router-dom";

import SubRequest from "../../components/subRequest/subRequest";
import PendingVisits from "../../components/pendingVisit/pendingVists";
import AddNewPolicy from "../../components/addNewPolicy/addNewPolicy";

function InsuranceSwitch() {
  return (
    <Switch>
      <Route exact path={"/subRequests"}>
        <div className="dashboard">
          <SubRequest />
        </div>
      </Route>
      <Route exact path={"/pendingVisits"}>
        <div className="dashboard">
          <PendingVisits />
        </div>
      </Route>
      <Route exact path={"/addNewPolicy"}>
        <div className="dashboard">
          <AddNewPolicy />
        </div>
      </Route>
    </Switch>
  );
}

export default InsuranceSwitch;
