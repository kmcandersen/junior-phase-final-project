import React from 'react';
import { Link } from 'react-router-dom';

const CampusCard = props => {
  const { id, name, address, description, imageUrl, numStudents } = props;
  const studentMessage = num => {
    if (num > 1) {
      return num + ' students';
    } else if (num === 1) {
      return num + ' student';
    }
    return 'No students enrolled';
  };

  return (
    <div className="custom-card">
      <div className="ui card">
        <div className="image">
          <img src={imageUrl} />
        </div>
        <div className="content">
          <Link to={`/campuses/${id}`}>
            <div className="header header-link">{name}</div>
          </Link>
        </div>
        <div className="meta">
          <span id="card-desc">{description}</span>
        </div>
        <div className="extra content">
          <span>
            <i className="map marker alternate icon" />
            {address}
          </span>
        </div>
        <div className="extra content">
          <span>
            <i className="user icon" />
            {studentMessage(numStudents)}
          </span>
        </div>
        <div className="extra content">
          <span className="right floated">
            <button
              type="submit"
              className="ui label delete-button"
              onClick={() => props.deleteCampus(id)}
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

export default CampusCard;
