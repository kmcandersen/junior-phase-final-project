import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT';
const PUT_SINGLE_STUDENT = 'PUT_SINGLE_STUDENT';
const DELETE_SINGLE_STUDENT = 'DELETE_SINGLE_STUDENT';

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

export const fetchStudents = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/students');
      //console.log('DATA FROM FETCH THUNK', data);
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
      //const newStudent = response.data.student;
      const newStudent = response.data;
      dispatch(addStudent(newStudent));
    } catch (err) {
      console.log('Err adding student: ', err);
    }
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
      dispatch(fetchStudents());
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
      const { data } = await axios.put(`/api/students/${id}`, student);
      // console.log('PSSdata', data);
      dispatch(putSingleStudent(data));
      dispatch(fetchSingleStudent(data[1].id));
    } catch (err) {
      console.log('Err updating student: ', err);
    }
  };
};

const initialState = {
  students: [],
  singleStudent: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return {
        ...state,
        students: action.students
      };
    case ADD_STUDENT:
      return { ...state, students: [...state.students, action.student] };
    case SET_SINGLE_STUDENT:
      return { ...state, singleStudent: action.student };
    case PUT_SINGLE_STUDENT: {
      const filteredStudents = state.students.filter(
        student => student.id !== action.student.id
      );
      return {
        ...state,
        students: [...filteredStudents, action.student]
      };
    }
    case DELETE_SINGLE_STUDENT: {
      const filteredStudents = state.students.filter(
        student => student.id !== action.student.id
      );
      return {
        ...state,
        students: [...filteredStudents]
      };
    }
    default:
      return state;
  }
};

// export default (students = [], action) => {
//   switch (action.type) {
//     case SET_STUDENTS:
//       return action.students;
//     case ADD_STUDENT:
//       return [...students, action.student];
//     default:
//       return students;
//   }
// };
