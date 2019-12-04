import React, { Fragment } from 'react';
import CampusCard from './CampusCard';
import { connect } from 'react-redux';

const AllCampuses = props => {
  const campuses = props.campuses;
  // console.log('all campuses', props);
  return (
    <div className="centered-parent">
      <Fragment>
        <div className="horiz-menu-row">
          <div className="ui fluid two item menu">
            <a className="item">All Campuses</a>
            <a className="item">Add A Campus</a>
          </div>
        </div>

        <div className="custom-list custom-card-list ui link cards">
          {campuses.map(campus => {
            return (
              <div key={campus.id}>
                <CampusCard {...campus} />
              </div>
            );
          })}
        </div>
      </Fragment>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:
export default connect(mapStateToProps)(AllCampuses);
