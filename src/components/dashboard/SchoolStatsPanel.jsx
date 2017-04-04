import React from 'react';
import PopCard from "../widgets/PopCard";
import {ActionFace} from 'material-ui/svg-icons';
import {grey600} from 'material-ui/styles/colors'
import PopCardBody from "../widgets/PopCardBody";

const SchoolStatsPanel = (props) => {
  const school = props.school;
  return (
      <div>
        <PopCard rounded={true} pop={<ActionFace color={grey600}/>}
                 body={<PopCardBody text='Students' number={`${school.activeStudentCount}/${school.studentCount}`}/>}
                 footer={<div>kkk</div>}/>
        <PopCard rounded={true} pop={<ActionFace color={grey600}/>} body={<div>jjjjj</div>} footer={<div>kkk</div>}/>
        <PopCard rounded={true} pop={<ActionFace color={grey600}/>} body={<div>jjjjj</div>} footer={<div>kkk</div>}/>
        <PopCard rounded={true} pop={<ActionFace color={grey600}/>} body={<div>jjjjj</div>} footer={<div>kkk</div>}/>

      </div>
  )
};

SchoolStatsPanel.propTypes = {
  school: React.PropTypes.object.isRequired,
};

export default SchoolStatsPanel