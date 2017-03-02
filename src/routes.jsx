import React from 'react';
import {Router, Route} from 'react-router';

import App from './components/App';
import NotFound from './components/notFound/NotFound';

const Routes = (props) => {
  return (
      <Router {...props}>
        <Route path="/" components={App}>

        </Route>
        <Route path="*" components={NotFound}/>
      </Router>
  )
};

export default Routes;