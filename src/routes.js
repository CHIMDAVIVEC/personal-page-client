import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageAbout from './components/about';

const BaseRoute = () => (
  <Switch>
    <Route exact path="/" component={PageAbout} />
  </Switch>
);

export default BaseRoute;
