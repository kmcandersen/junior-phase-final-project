import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';

export const setStudents = students => {
  return {
    type: SET_STUDENTS,
    students
  };
};

export const addStudent = student => {
  return {
    type: ADD_STUDENT,
    student
  };
};

export const fetchStudents = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/students');
      dispatch(setStudents(data));
    } catch (err) {
      console.log('Err fetching students: ', err);
    }
  };
};

export const postStudent = student => {
  return async dispatch => {
    try {
      const response = await axios.post('/api/students', student);
      const newStudent = response.data;
      dispatch(addStudent(newStudent));
    } catch (err) {
      console.log('Err adding student: ', err);
    }
  };
};

export default (students = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...students, action.student];
    default:
      return students;
  }
};
