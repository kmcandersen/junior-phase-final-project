import axios from 'axios';

const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT';

export const setSingleStudent = student => {
  return {
    type: SET_SINGLE_STUDENT,
    student
  };
};

export const fetchSingleStudent = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      dispatch(setSingleStudent(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_STUDENT:
      return action.student;
    default:
      return state;
  }
};
