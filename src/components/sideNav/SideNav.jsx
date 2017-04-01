import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import {Drawer, List, ListItem, makeSelectable, IconButton} from 'material-ui';
import {ActionDashboard, SocialPerson, ContentContentPaste, NavigationMenu} from 'material-ui/svg-icons';

const SelectableList = makeSelectable(List);

class SideNav extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeNavTab: 'dashboard',
      drawerOpened: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleNavTabSelect = this.handleNavTabSelect.bind(this);
  }

  handleDrawerToggle() {
    this.setState({drawerOpened: !this.state.drawerOpened});
  }

  handleNavTabSelect(event, key){
    this.setState({activeNavTab: key});
  }

  render(){
    return (
        <div>
          <IconButton style={{position: 'absolute'}} onTouchTap={this.handleDrawerToggle}>
            <NavigationMenu/>
          </IconButton>
          <Drawer
              open={this.state.drawerOpened}
              docked={false}
              onRequestChange={(open) => this.setState({drawerOpened: open})}
              width={300}>
            <SelectableList value={this.state.activeNavTab} onChange={this.handleNavTabSelect}>
              <ListItem value={'dashboard'} primaryText={'Dashboard'} leftIcon={<ActionDashboard/>} onTouchTap={() => browserHistory.push('/dashboard')}/>
              <ListItem value={'departments'} primaryText={'Departments'} leftIcon={<ContentContentPaste/>} onTouchTap={() => browserHistory.push('/departments')}/>
              <ListItem value={'courses'} primaryText={'Courses'} leftIcon={<SocialPerson/>} onTouchTap={() => browserHistory.push('/courses')}/>
              <ListItem value={'students'} primaryText={'Students'} leftIcon={<SocialPerson/>} onTouchTap={() => browserHistory.push('/students')}/>
              <ListItem value={'classes'} primaryText={'Classes'} leftIcon={<SocialPerson/>} onTouchTap={() => browserHistory.push('/classes')}/>
              <ListItem value={'staff'} primaryText={'Staff Directory'} leftIcon={<SocialPerson/>} onTouchTap={() => browserHistory.push('/staff')}/>
            </SelectableList>
          </Drawer>
        </div>
    )
  }
}

export default SideNav;