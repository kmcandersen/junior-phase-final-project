import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';

export const setCampuses = campuses => {
  return {
    type: SET_CAMPUSES,
    campuses
  };
};

export const addCampus = campus => {
  return {
    type: ADD_CAMPUS,
    campus
  };
};

export const fetchCampuses = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/campuses');
      dispatch(setCampuses(data));
    } catch (err) {
      console.log('Err fetching campuses: ', err);
    }
  };
};

export const postCampus = campus => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/campuses', campus);
      const newCampus = response.data;
      dispatch(addCampus(newCampus));
    } catch (err) {
      console.log('Err adding campus: ', err);
    }
  };
};

export default (campuses = [], action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      return [...campuses, action.campus];
    default:
      return campuses;
  }
};
