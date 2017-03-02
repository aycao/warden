
const initialState = {
  schools: null,
};

const SchoolReducer = (state_schools = initialState, action) => {
  switch(action.type){
    default:
      return state_schools;
  }
};

export default SchoolReducer;

