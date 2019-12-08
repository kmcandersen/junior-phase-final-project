import axios from 'axios';

const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT';
const PUT_SINGLE_STUDENT = 'PUT_SINGLE_STUDENT';
const DELETE_SINGLE_STUDENT = 'DELETE_SINGLE_STUDENT';

export const setSingleStudent = student => {
  return {
    type: SET_SINGLE_STUDENT,
    student
  };
};

export const putSingleStudent = student => {
  return {
    type: PUT_SINGLE_STUDENT,
    student
  };
};

export const deleteSingleStudent = student => {
  return {
    type: DELETE_SINGLE_STUDENT,
    student
  };
};

export const fetchSingleStudent = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      dispatch(setSingleStudent(data));
    } catch (err) {
      console.log('Err fetching student: ', err);
    }
  };
};

export const removeStudent = id => {
  return async dispatch => {
    try {
      const { data } = await axios.delete(`/api/students/${id}`);
      dispatch(deleteSingleStudent(data));
    } catch (err) {
      console.log('Err removing student: ', err);
    }
  };
};

//import get students thunk, dispatch inside
//update sel students, refecth all students
export const updateStudent = (id, student) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/students/${id}/update`, student);
      dispatch(putSingleStudent(data));
    } catch (err) {
      console.log('Err updating student: ', err);
    }
  };
};

export default (student = {}, action) => {
  switch (action.type) {
    case SET_SINGLE_STUDENT:
      return action.student;
    case PUT_SINGLE_STUDENT:
      return action.student;
    case DELETE_SINGLE_STUDENT:
      return null;
    default:
      return student;
  }
};
