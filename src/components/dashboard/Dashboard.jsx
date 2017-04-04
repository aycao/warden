import React, {Component} from 'react';
import {connect} from 'react-redux';
import SchoolActions from '../../actions/schools';
import MainPanelWait from "../widgets/MainPanelWait";
import SchoolStatsPanel from "./SchoolStatsPanel";

class Dashboard extends Component{

  componentDidMount() {
    if(!this.props.school) {
      // hard coded for now
      this.props.fetchSchool('58d1e005a458c4638ad960ee');
    }
  }

  render() {
    if(!this.props.school){
      return (
          <MainPanelWait/>
      )
    }
    const school = this.props.school;
    return (
        <div className="dashboard main-panel">
          <SchoolStatsPanel school={school}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    school: state.schools.activeSchool,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSchool: (id) => {
      dispatch(SchoolActions.fetchSchool(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

