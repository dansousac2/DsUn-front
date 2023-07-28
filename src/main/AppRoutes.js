import React from "react";
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom";

import Home from "../screens/Home/Home";

function AppRoutes(props) {
  return (
      <BrowserRouter>
        <Switch>
          <Route component = { Home } path="/" exact/>
         </Switch> 
      </BrowserRouter>


  );
}

export default AppRoutes;