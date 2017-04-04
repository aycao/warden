import axios from 'axios';
import {getApiUrl} from '../utils';


const schoolActions = {
  SCHOOL_FATCHED: 'SCHOOL_FATCHED',
};

class SchoolActions {
  fetchSchool(id){
    const request = axios.get(getApiUrl('schools', id), {responseType: 'json'});
    return (dispatch) => {
      request.then((res) => {
        dispatch({
          type: schoolActions.SCHOOL_FATCHED,
          school: res.data,
        })
      })
    }
  }
}

const _schoolActions = new SchoolActions();

export default _schoolActions;

export {
  schoolActions,
}