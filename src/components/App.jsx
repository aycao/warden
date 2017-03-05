import React, { Component, PropTypes } from 'react';

import 'jquery';
import '../styles/app.scss';

import SideNav from './sideNav/SideNav';


class App extends Component {
  render() {
    return (
        <div className="app">
          <SideNav/>
          {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
