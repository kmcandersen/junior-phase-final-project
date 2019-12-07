import React from 'react';
import { connect } from 'react-redux';

const Home = ({ students, campuses }) => {
  return (
    <div className="centered-parent">
      <main>
        <h2>Margaret Hamilton</h2>
        <h1>Academy of JavaScript</h1>
      </main>
      <div className="ui statistics">
        <div className="statistic">
          <div className="value">
            <i className="user icon"></i>
            <span className="stat-num">{students.length}</span>
          </div>
          <div className="label stat-label">Students</div>
        </div>
        <div className="statistic">
          <div className="value">
            <i className="building icon"></i>
            <span className="stat-num">{campuses.length}</span>
          </div>
          <div className="label stat-label">Campuses</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
    // planets: state.planets
  };
};

export default connect(mapStateToProps)(Home);
