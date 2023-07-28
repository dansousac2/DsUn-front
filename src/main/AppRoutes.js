import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";

import Home from "../screens/Home/Home";
import ViewCollabs from "../screens/Collaborator/ViewCollabs";

function AppRoutes(props) {
  return (
      <BrowserRouter>
        <Switch>
          <Route component = { Home } path="/" exact />
          <Route component = { ViewCollabs } path="/collabs" />
         </Switch> 
      </BrowserRouter>


  );
}

export default AppRoutes;