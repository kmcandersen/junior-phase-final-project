import React from 'react';
import { connect } from 'react-redux';

const Home = ({ students, campuses }) => {
  return (
    <div className="centered-parent main">
      <div class="school-name">
        <p>
          Margaret
          <span>
            <i className="rocket icon" id="rocket-sm" />
          </span>
          Hamilton <br />
          Academy of JavaScript
        </p>
      </div>

      <div className="ui statistics">
        <div className="statistic">
          <div className="value">
            <i className="user icon" />
            <span className="stat-num">{students.length}</span>
          </div>
          <div className="label stat-label">Students</div>
        </div>
        <div className="statistic">
          <div className="value">
            <i className="building icon" />
            <span className="stat-num">{campuses.length}</span>
          </div>
          <div className="label stat-label">Campuses</div>
        </div>
        <div className="statistic">
          <div className="value">
            <i className="desktop icon" />
            <span className="stat-num">1</span>
          </div>
          <div className="label stat-label">School</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses.campuses,
    students: state.students.students
  };
};

export default connect(mapStateToProps)(Home);
