import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import {Drawer, List, ListItem, makeSelectable, RaisedButton} from 'material-ui';
import {ActionDashboard, SocialPerson, ContentContentPaste} from 'material-ui/svg-icons';

const SelectableList = makeSelectable(List);

class SideNav extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeNavTab: 'dashboard',
      drawerOpened: true,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleNavTabSelect = this.handleNavTabSelect.bind(this);
  }

  handleDrawerToggle() {
    this.setState({drawerOpened: !this.state.drawerOpened});
  }

  handleNavTabSelect(event, key){
    this.setState({activeNavTab: key})
  }

  render(){
    return (
        <Drawer open={this.state.drawerOpened} className="side-nav" width={300}>
          <SelectableList value={this.state.activeNavTab} onChange={this.handleNavTabSelect}>
            <ListItem value={'dashboard'} primaryText={'Dashboard'} leftIcon={<ActionDashboard/>} onTouchTap={() => browserHistory.push('/dashboard')}/>
            <ListItem value={'second'} primaryText={'Second'} leftIcon={<ContentContentPaste/>} onTouchTap={() => browserHistory.push('/dashboard')}/>
            <ListItem value={'third'} primaryText={'Third'} leftIcon={<SocialPerson/>} onTouchTap={() => browserHistory.push('/dashboard')}/>
          </SelectableList>
        </Drawer>
    )
  }
}

export default SideNav;