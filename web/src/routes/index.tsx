import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import CreateDeveloper from '../pages/CreateDevelopers';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/developers/create" component={CreateDeveloper} />
      <Route path="/developers/:id" component={CreateDeveloper} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
