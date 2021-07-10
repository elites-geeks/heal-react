import React from "react";
import { Route, Switch } from "react-router-dom";

import subRequest from "../../components/subRequest/subRequest";
import pendingVisits from "../../components/pendingVisit/pendingVists";
import addNewPolicy from "../../components/addNewPolicy/addNewPolicy";

function InsuranceSwitch() {
  return (
    <Switch>
      <Route exact path={"/subRequests"}>
        <subRequest />
      </Route>
      <Route exact path={"/pendingVisits"}>
        <pendingVisits />
      </Route>
      <Route exact path={"/addNewPolicy"}>
        <addNewPolicy />
      </Route>
    </Switch>
  );
}

export default InsuranceSwitch;
