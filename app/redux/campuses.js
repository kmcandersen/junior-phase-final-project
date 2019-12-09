import axios from 'axios';
import { fetchSingleStudent } from './students';

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
      dispatch(deleteSingleCampus(data));
      dispatch(fetchCampuses());
    } catch (err) {
      console.log('Err removing campus: ', err);
    }
  };
};

export const updateCampus = (id, campus) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/campuses/${id}`, campus);

      console.log('U-CAMPUS data', data);
      dispatch(putSingleCampus(data));
      dispatch(fetchSingleCampus(data[1].id));
      dispatch(fetchCampuses());
      //**so StudentCampusCards updates immediately after submitting Campus Update--doesn't work [matches redux/students.js]
      dispatch(fetchSingleStudent(data[1].id));
    } catch (err) {
      console.log('Err updating campus: ', err);
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
    case PUT_SINGLE_CAMPUS: {
      const filteredCampuses = state.campuses.filter(
        campus => campus.id !== action.campus.id
      );
      return {
        ...state,
        campuses: [...filteredCampuses, action.campus]
      };
    }
    case DELETE_SINGLE_CAMPUS: {
      const filteredCampuses = state.campuses.filter(
        campus => campus.id !== action.campus.id
      );
      return {
        ...state,
        campuses: [...filteredCampuses]
      };
    }
    default:
      return state;
  }
};
