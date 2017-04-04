import {schoolActions} from '../actions/schools';
const initialState = {
  schools: null,
  activeSchool: null,
};

const SchoolReducer = (state_schools = initialState, action) => {
  switch(action.type){
    case schoolActions.SCHOOL_FATCHED:
      return {...state_schools, activeSchool: action.school};
    default:
      return state_schools;
  }
};

export default SchoolReducer;

