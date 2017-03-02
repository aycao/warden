import {combineReducers} from 'redux';

import SchoolReducer from './schools';

const RootReducer = combineReducers({
  schools: SchoolReducer,
});

export default RootReducer;