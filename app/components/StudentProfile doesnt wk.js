import React from 'react';
import { Link } from 'react-router-dom';

const StudentProfile = props => {
  console.log('STUDENT PROFILE props', props);
  const student = props.singleStudent;
  // const {
  //   imageUrl,
  //   firstName,
  //   lastName,
  //   campus,
  //   gpa,
  //   email
  // } = this.props.student;

  const imageUrl = student.imageUrl || '';
  const firstName = student.firstName || '';
  const lastName = student.lastName || '';
  //const campus = student.campus || {};
  const gpa = student.gpa || 0.0;
  const email = student.email || '';

  const notEnrolled = 'Not enrolled';
  const campus = props.student.campus || notEnrolled;

  return (
    <div className="custom-list">
      <div className="ui divided items custom-items ">
        <div className="item custom-item">
          <div className="image custom-image">
            <img src={imageUrl}></img>
          </div>
          <div className="content">
            <span className="header">{`${firstName} ${lastName}`}</span>

            {campus === 'Not enrolled' ? (
              <div className="meta">
                <span className="cinema">{notEnrolled}</span>
              </div>
            ) : (
              <Link to={`/campuses/${campus.id}`}>
                <div className="meta">
                  <span className="cinema">{campus.name} campus</span>
                </div>
              </Link>
            )}
            <div className="extra content">
              <span className="right floated">{gpa}</span>
              <span>
                <i className="graduation cap icon"></i>
                GPA
              </span>
            </div>
            <div className="ui divider div-sm"></div>
            <div className="extra content">
              <span>
                <i className="envelope icon"></i>
                Email
                <span className="right floated">{email}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
