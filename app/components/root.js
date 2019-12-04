import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import StudentProfile from './StudentProfile';
// import CampusProfile from './CampusProfile';
import { fetchStudents } from '../redux/students';
import { fetchCampuses } from '../redux/campuses';

class Root extends Component {
  componentDidMount() {
    // Huh, I wonder what this mysterious componentDidMount is doing here... 🤔
    this.props.loadStudents();
    this.props.loadCampuses();
  }
  render() {
    return (
      <Router>
        <div className="root">
          <nav className="root-nav">
            <NavLink exact activeClassName="active-link" to="/">
              Home
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/students">
              Students
            </NavLink>
            <NavLink exact activeClassName="active-link" to="/campuses">
              Campuses
            </NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route path="/students/:studentId" component={StudentProfile} />
            {/* <Route path="/campuses/:campusId" component={CampusProfile} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadStudents: () => dispatch(fetchStudents()),
    loadCampuses: () => dispatch(fetchCampuses())
  };
};

export default connect(null, mapDispatchToProps)(Root);
