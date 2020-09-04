import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard, CreateProduct, ViewCart } from '../scenes';

const Routes = () => (
  <Switch>
    <Route exact path="/dashboard/createProduct" component={CreateProduct} />
    <Route exact path="/dashboard/viewCart" component={ViewCart} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
