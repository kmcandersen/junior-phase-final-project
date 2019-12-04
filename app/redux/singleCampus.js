import axios from 'axios';

const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS';

export const getSingleCampus = campus => {
  return {
    type: GET_SINGLE_CAMPUS,
    campus
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

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};
