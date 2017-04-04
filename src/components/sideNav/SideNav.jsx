import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';


import {ActionDashboard, SocialPerson, ActionChromeReaderMode,
    ActionFace, NavigationMenu, SocialSchool, ActionBook, ActionAssignmentTurnedIn} from 'material-ui/svg-icons';

import {WINDOW_WIDTH_THRESHOLD} from '../../constants';

const SelectableList = makeSelectable(List);

class SideNav extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeNavTab: 'dashboard',
      drawerOpened: window.innerWidth >= WINDOW_WIDTH_THRESHOLD,
      drawerDocked: window.innerWidth >= WINDOW_WIDTH_THRESHOLD,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleNavTabSelect = this.handleNavTabSelect.bind(this);
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize() {
    if(window.innerWidth < WINDOW_WIDTH_THRESHOLD){
      if(this.state.drawerDocked){
        this.setState({drawerDocked: false, drawerOpened: false});
      }
    }else{
      if(!this.state.drawerDocked){
        this.setState({drawerDocked: true, drawerOpened: true});
      }
    }
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
              docked={this.state.drawerDocked}
              onRequestChange={(open) => this.setState({drawerOpened: open})}
              width={250}>
            <SelectableList value={this.state.activeNavTab} onChange={this.handleNavTabSelect}>
              <ListItem value={'dashboard'} primaryText={'Dashboard'} leftIcon={<ActionDashboard/>} onTouchTap={() => browserHistory.push('/dashboard')}/>
              <ListItem value={'departments'} primaryText={'Departments'} leftIcon={<SocialSchool/>} onTouchTap={() => browserHistory.push('/departments')}/>
              <ListItem value={'staff'} primaryText={'Staff Directory'} leftIcon={<SocialPerson/>} onTouchTap={() => browserHistory.push('/staff')}/>
              <ListItem value={'courses'} primaryText={'Courses'} leftIcon={<ActionChromeReaderMode/>} onTouchTap={() => browserHistory.push('/courses')}/>
              <ListItem value={'classes'} primaryText={'Classes'} leftIcon={<ActionBook/>} onTouchTap={() => browserHistory.push('/classes')}/>
              <ListItem value={'students'} primaryText={'Students'} leftIcon={<ActionFace/>} onTouchTap={() => browserHistory.push('/students')}/>
              <ListItem value={'assignments'} primaryText={'Assignments'} leftIcon={<ActionAssignmentTurnedIn/>} onTouchTap={() => browserHistory.push('/assignments')}/>
            </SelectableList>
          </Drawer>
        </div>
    )
  }
}

export default SideNav;