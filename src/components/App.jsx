import React, { Component } from 'react';

import 'jquery';
import '../styles/app.scss';


import Dashboard from './dashboard/Dashboard';


class App extends Component {
  render() {
    return (
        <div className="app">
          <Dashboard/>
        </div>
    );
  }
}

export default App;
