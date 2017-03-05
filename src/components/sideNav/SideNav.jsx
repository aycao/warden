import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import {Nav, NavItem} from 'react-bootstrap';

class SideNav extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeNavTab: 'dashboard',
    };
    this.handleNavTabSelect = this.handleNavTabSelect.bind(this);
  }

  handleNavTabSelect(key){
    this.setState({activeNavTab: key})
  }

  render(){
    return (
        <div className="side-nav">
          <Nav bsStyle="pills"
               stacked
               activeKey={this.state.activeNavTab}
               onSelect={this.handleNavTabSelect}>
            <NavItem eventKey={'dashboard'} onClick={() => browserHistory.push('/dashboard')}>Dashboard</NavItem>
            <NavItem eventKey={'second'} onClick={() => browserHistory.push('/second')}>Second</NavItem>
            <NavItem eventKey={'third'} onClick={() => browserHistory.push('/third')}>Second</NavItem>
          </Nav>
        </div>
    )
  }
}

export default SideNav;