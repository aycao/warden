import React, {Component} from 'react';

import SideNav from './SideNav';
import MainPanel from './MainPanel';

class Dashboard extends Component{
  render(){
    return (
        <div className="dashboard">
          <SideNav/>
          <MainPanel/>
        </div>
    )
  }
}

export default Dashboard;

