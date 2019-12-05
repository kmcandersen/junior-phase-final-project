import React from 'react';
import { Link } from 'react-router-dom';

const CampusCard = ({
  id,
  name,
  address,
  description,
  imageUrl,
  numStudents
}) => {
  const studentMessage = num => {
    if (num > 1) {
      return num + ' students';
    } else if (num === 1) {
      return num + ' student';
    }
    return 'No students enrolled';
  };

  return (
    <Link to={`/campuses/${id}`}>
      <div className="custom-card">
        <div className="ui card">
          <div className="image">
            <img src={imageUrl}></img>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="meta">
            <span className="cinema">{description}</span>
          </div>
          <div className="extra content">
            <span className="right floated">{address}</span>
            <span>
              <i className="map marker alternate icon"></i>
              Address
            </span>
          </div>
          {/* <div className="extra content">
            <span className="right floated">{description}</span>
            <span>{description}</span>
          </div> */}
          <div className="extra content">
            <span>
              <i className="user icon"></i>
              {studentMessage(numStudents)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampusCard;
