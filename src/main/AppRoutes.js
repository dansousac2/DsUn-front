import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";

import Home from "../screens/Home/Home";
import ViewCollabs from "../screens/Collaborator/ViewCollabs";
import CreateCollaborator from '../screens/Collaborator/CreateCollaborator';
import EditCollabName from "../screens/Collaborator/EditCollabName";
import ViewItems from "../screens/Items/ViewItems";
import CreateItem from "../screens/Items/CreateItem";
import ViewBreakFasts from "../screens/BreakFas/ViewBreakFasts";
import CreateBreakFast from "../screens/BreakFas/CreateBreakFast";
import ParticipeBreakfast from "../screens/BreakFas/ParticipeBreakfast";

function AppRoutes(props) {
  return (
      <BrowserRouter>
        <Switch>
          <Route component = { Home } path="/" exact />
          <Route component = { ViewCollabs } path="/collabs" />
          <Route component = { CreateCollaborator } path="/createcollab" />
          <Route component = { EditCollabName } path="/editcollabname" />
          <Route component = { ViewItems } path="/items" />
          <Route component = { CreateItem } path="/createItem" />
          <Route component = { ViewBreakFasts } path="/breakfasts" />
          <Route component = { CreateBreakFast } path="/createbreakfast" />
          <Route component = { ParticipeBreakfast } path="/participebreakfast" />
         </Switch> 
      </BrowserRouter>


  );
}

export default AppRoutes;