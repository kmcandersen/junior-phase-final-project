import React from 'react';
import { Link } from 'react-router-dom';

const CampusCard = ({ id, name, address, description, imageUrl }) => {
  //console.log('campus card props', props);
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
          <div className="extra content">
            <span className="right floated">{address}</span>
            <span>
              <i class="map marker alternate icon"></i>
              Address
            </span>
          </div>
          <div className="extra content">
            {/* <span className="right floated">{description}</span> */}
            <span>{description}</span>
          </div>
          <div className="extra content">
            <span>
              <i class="user icon"></i>
              53 Students
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CampusCard;
