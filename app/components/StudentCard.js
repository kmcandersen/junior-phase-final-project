import React from 'react';
import { Link } from 'react-router-dom';

const StudentCard = ({ id, imageUrl, firstName, lastName, email, gpa }) => {
  //   console.log('student card props', props);
  return (
    <Link to={`/students/${id}`}>
      <div className="custom-card">
        <div className="ui card">
          <div className="image">
            <img src={imageUrl}></img>
          </div>
          <div className="content">
            <div className="header">{`${firstName} ${lastName}`}</div>
          </div>
          <div className="extra content">
            <span className="right floated">Saturn</span>
            <span>
              <i className="building icon"></i>
              Campus
            </span>
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
    </Link>
  );
};

export default StudentCard;
