import React from 'react';
import CampusCard from './CampusCard';
import { connect } from 'react-redux';

const AllCampuses = ({ campuses, students }) => {
  return (
    <div className="centered-parent">
      <div className="horiz-menu-row">
        <div className="ui fluid two item menu">
          <a className="item">All Campuses</a>
          <a className="item">
            Add A Campus <i className="plus square icon"></i>
          </a>
        </div>
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
