import React from "react";
import { Route, Switch } from "react-router-dom";

import subRequest from "../../components/subRequest/subRequest";
import pendingVisits from "../../components/pendingVisit/pendingVists";
import addNewPolicy from "../../components/addNewPolicy/addNewPolicy";

function InsuranceSwitch() {
  return (
    <Switch>
      <Route exact path={"/subRequests"}>
        <div className="dashboard">
          <subRequest />
        </div>
      </Route>
      <Route exact path={"/pendingVisits"}>
        <div className="dashboard">
          <pendingVisits />
        </div>
      </Route>
      <Route exact path={"/addNewPolicy"}>
        <div className="dashboard">
          <addNewPolicy />
        </div>
      </Route>
    </Switch>
  );
}

export default InsuranceSwitch;
