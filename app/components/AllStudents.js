import React from 'react';
import StudentCard from './StudentCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AllStudents = ({ students }) => {
  return (
    <div className="centered-parent">
      <div className="horiz-menu-row">
        <button type="submit" className="ui basic button add-button">
          <Link to="/students/add">
            Add A Student
            <i className="plus square icon icon-padding"></i>
          </Link>
        </button>
      </div>
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
