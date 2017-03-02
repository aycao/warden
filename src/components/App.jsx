import React, { Component } from 'react';
import '../styles/app.scss';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

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
