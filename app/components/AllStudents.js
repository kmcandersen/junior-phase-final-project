import React from 'react';
import StudentCard from './StudentCard';
import { connect } from 'react-redux';

const AllStudents = ({ students }) => {
  return (
    <div className="custom-list custom-card-list ui cards">
      {!students.length ? (
        <p>NO STUDENTS ENROLLED</p>
      ) : (
        students.map(student => {
          return (
            <div key={student.id}>
              <StudentCard {...student} />
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    students: state.students
  };
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
// export default connect(mapState, mapDispatch)(AllStudents)
export default connect(mapStateToProps)(AllStudents);
