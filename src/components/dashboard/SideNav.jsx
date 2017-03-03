import React, {Component} from 'react';
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
            <NavItem eventKey={'dashboard'}>NavItem 1 content</NavItem>
            <NavItem eventKey={'second'}>NavItem 2 content</NavItem>
            <NavItem eventKey={'third'}>NavItem 3 content</NavItem>
          </Nav>
        </div>
    )
  }
}

export default SideNav;