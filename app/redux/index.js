import { combineReducers } from 'redux';
import students from './students';
import campuses from './campuses';
import singleStudent from './singleStudent';
import singleCampus from './singleCampus';

// This reducer is just a stub. We should probably do something
// with that combineReducers thing up there...
//const appReducer = () => {}

const appReducer = combineReducers({
  students,
  campuses,
  singleStudent,
  singleCampus
});

export default appReducer;
