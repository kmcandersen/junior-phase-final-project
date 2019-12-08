import React from 'react';
import CampusCard from './CampusCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AllCampuses = props => {
  const campuses = props.campuses.campuses;
  const students = props.students.students;
  // console.log('ALLCAMPUSES students', students);
  return (
    <div className="centered-parent">
      <div className="horiz-menu-row">
        <button type="submit" className="ui basic button add-button">
          <Link to="/campuses/add">
            Add A Campus
            <i className="plus square icon icon-padding" />
          </Link>
        </button>
      </div>

      <div className="custom-list custom-card-list ui cards">
        {campuses.map(campus => {
          return (
            <div key={campus.id}>
              <CampusCard
                {...campus}
                numStudents={
                  students.filter(student => student.campusId === campus.id)
                    .length
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
export default connect(mapStateToProps)(AllCampuses);
