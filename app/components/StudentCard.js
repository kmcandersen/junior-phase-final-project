import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = ({
  id,
  imageUrl,
  firstName,
  lastName,
  campus,
  gpa,
  email
}) => {
  return (
    <div className="custom-card">
      <div className="ui card">
        <div className="image">
          <img src={imageUrl}></img>
        </div>
        <div className="content">
          <Link to={`/students/${id}`}>
            <div className="header">{`${firstName} ${lastName}`}</div>
          </Link>
          <div className="meta">
            <Link to={`/campuses/${campus.id}`}>
              {campus.name === '' ? (
                <span className="cinema">Not currently enrolled</span>
              ) : (
                <span className="cinema">{campus.name} campus</span>
              )}
            </Link>
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">{gpa}</span>
          <span>
            <i className="graduation cap icon"></i>
            GPA
          </span>
        </div>
        <div className="extra content">
          <span className="right floated">{email}</span>
          <span>
            <i className="envelope icon"></i>
            Email
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
