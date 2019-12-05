import React from 'react';

const CampusProfile = ({
  imageUrl,
  name,
  description,
  address,
  campusStudents
}) => {
  return (
    <div className="custom-list">
      <div className="ui divided items custom-items ">
        <div className="item custom-item">
          <div className="image custom-image">
            <img src={imageUrl}></img>
          </div>
          <div className="content">
            <span className="header">{name}</span>
            <div className="meta">
              <span className="cinema">{description}</span>
            </div>
            {/* <div className="description">
          <p></p>
        </div> */}
            <div className="extra content">
              <span className="right floated">{address}</span>
              <span>
                <i className="map marker alternate icon"></i>
                Address
              </span>
            </div>
            <div className="ui divider div-sm"></div>
            <div className="extra content">
              <span className="right floated"></span>
              <span>
                <i className="user icon"></i>
                {campusStudents}
              </span>
            </div>
            <div className="extra content">
              <button type="submit" className="ui button">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusProfile;
