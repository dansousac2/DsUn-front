import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";

import Home from "../screens/Home/Home";
import ViewCollabs from "../screens/Collaborator/ViewCollabs";
import CreateCollaborator from '../screens/Collaborator/CreateCollaborator';
// import UpdateCollabName from '../screens/Collaborator/UpdateCollabName';
import ViewItems from "../screens/Items/ViewItems";
import CreateItem from "../services/CreateItem";

function AppRoutes(props) {
  return (
      <BrowserRouter>
        <Switch>
          <Route component = { Home } path="/" exact />
          <Route component = { ViewCollabs } path="/collabs" />
          <Route component = { CreateCollaborator } path="/createcollab" />
          {/* <Route component = { UpdateCollabName } path="/updateColab" /> */}
          <Route component = { ViewItems } path="/items" />
          <Route component = { CreateItem } path="/createItem" />
         </Switch> 
      </BrowserRouter>


  );
}

export default AppRoutes;