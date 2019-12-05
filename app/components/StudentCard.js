import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = props => {
  const imageUrl = props.imageUrl || '';
  const firstName = props.firstName || '';
  const lastName = props.lastName || '';
  const campus = props.campus || {};
  const gpa = props.gpa || 0.0;
  const email = props.email || '';

  return (
    <div className="custom-card">
      <div className="ui card">
        <div className="image">
          <img src={imageUrl}></img>
        </div>
        <div className="content">
          <Link to={`/students/${props.id}`}>
            <div className="header">{`${firstName} ${lastName}`}</div>
          </Link>
          <div className="meta">
            <Link to={`/campuses/${campus.id}`}>
              <span className="cinema">{campus.name} campus</span>
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
