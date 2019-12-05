import React, { Fragment } from 'react';
import StudentCard from './StudentCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AllStudents = props => {
  const students = props.students;

  return (
    <div className="centered-parent">
      <Fragment>
        <div className="horiz-menu-row">
          <div className="ui fluid two item menu">
            <a className="item">All Students</a>
            <a className="item">
              Add A Student <i class="plus square icon"></i>
            </a>
          </div>
        </div>

        <div className="custom-list custom-card-list ui link cards">
          {students.map(student => {
            return (
              <Link to={`/students/${student.id}`} key={student.id}>
                <div>
                  <StudentCard {...student} />
                </div>
              </Link>
            );
          })}
        </div>
      </Fragment>
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
