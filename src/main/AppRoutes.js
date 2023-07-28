import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";

import Home from "../screens/Home/Home";
import ViewCollabs from "../screens/Collaborator/ViewCollabs";
import CreateCollaborator from '../screens/Collaborator/CreateCollaborator';
// import UpdateCollabName from '../screens/Collaborator/UpdateCollabName';

function AppRoutes(props) {
  return (
      <BrowserRouter>
        <Switch>
          <Route component = { Home } path="/" exact />
          <Route component = { ViewCollabs } path="/collabs" />
          <Route component = { CreateCollaborator } path="/createcollab" />
          {/* <Route component = { UpdateCollabName } path="/updateColab" /> */}
         </Switch> 
      </BrowserRouter>


  );
}

export default AppRoutes;