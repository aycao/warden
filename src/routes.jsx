import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';

import App from './components/App';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/notFound/NotFound';

const Routes = (props) => {
  return (
      <Router {...props}>
        <Route path="/" components={App}>
          <IndexRedirect to="dashboard"/>
          <Route path="dashboard" component={Dashboard} />
        </Route>
        <Route path="*" components={NotFound}/>
      </Router>
  )
};

export default Routes;