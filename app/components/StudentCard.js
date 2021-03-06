import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const StudentCard = props => {
  const { id, imageUrl, firstName, lastName, gpa, email } = props;

  const notEnrolled = 'Not enrolled';
  const campus = props.campus || notEnrolled;

  return (
    <div className="custom-card">
      <div className="ui card">
        <div className="image">
          <img src={imageUrl} />
        </div>
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
            <Link to={`/campuses/${campus.id}`}>
              <span className="right floated">{campus.name}</span>
              <span>
                <i className="building icon" />
                Campus
              </span>
            </Link>
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
              onClick={() => props.deleteStudent(id)}
            >
              <i className="minus square icon" />
              Delete
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
