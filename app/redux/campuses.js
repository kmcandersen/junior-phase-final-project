import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';
const PUT_SINGLE_CAMPUS = 'PUT_SINGLE_CAMPUS';
const DELETE_SINGLE_CAMPUS = 'DELETE_SINGLE_CAMPUS';

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

export const getSingleCampus = campus => {
  return {
    type: GET_SINGLE_CAMPUS,
    campus
  };
};

export const putSingleCampus = campus => {
  return {
    type: PUT_SINGLE_CAMPUS,
    campus
  };
};

export const deleteSingleCampus = campus => {
  return {
    type: DELETE_SINGLE_CAMPUS,
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

export const fetchSingleCampus = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      dispatch(getSingleCampus(data));
    } catch (err) {
      console.log('Err fetching campus: ', err);
    }
  };
};

export const removeCampus = id => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/campuses/${id}`);
      dispatch(deleteSingleStudent(data));
      dispatch(fetchStudents());
    } catch (err) {
      console.log('Err removing student: ', err);
    }
  };
};

const initialState = {
  campuses: [],
  singleCampus: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return {
        ...state,
        campuses: action.campuses
      };
    case ADD_CAMPUS:
      return { ...state, campuses: [...state.campuses, action.campus] };
    case GET_SINGLE_CAMPUS:
      return { ...state, singleCampus: action.campus };
    default:
      return state;
  }
};
