import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import CreateDeveloper from '../pages/CreateDevelopers';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/developers/create" component={CreateDeveloper} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
