import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateStudent } from '../redux/students';

// campus null (not obj)
// campusId null (not num)

const StudentCampusCard = props => {
  //console.log('STUDENT CC PROPS', props);
  const { id, firstName, lastName, gpa, email } = props;

  const notEnrolled = 'Not enrolled';
  const campus = props.campus || notEnrolled;

  return (
    <div className="custom-card">
      <div className="ui card">
        <div className="content">
          <Link to={`/students/${id}`}>
            <div className="header header-link">{`${firstName} ${lastName}`}</div>
          </Link>
        </div>

        <div className="extra content">
          {campus === 'Not enrolled' ? (
            <Fragment>
              <span className="right floated">{notEnrolled}</span>
              <span>
                <i className="building icon" />
                Campus
              </span>
            </Fragment>
          ) : (
            <Fragment>
              <span className="right floated">{campus.name}</span>
              <span>
                <i className="building icon" />
                Campus
              </span>
            </Fragment>
          )}
        </div>

        <div className="extra content">
          <span className="right floated">{gpa}</span>
          <span>
            <i className="graduation cap icon" />
            GPA
          </span>
        </div>
        <div className="extra content">
          <span>
            <i className="envelope icon" />
            {email}
          </span>
        </div>
        <div className="extra content">
          <span className="right floated">
            <button
              type="submit"
              className="ui label delete-button"
              onClick={() => props.updateStudentCampus(id, { campusId: 0 })}
            >
              <i className="minus square icon" />
              Unenroll
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    updateStudent: student => dispatch(updateStudent(student))
  };
};

export default connect(null, mapDispatchToProps)(StudentCampusCard);
