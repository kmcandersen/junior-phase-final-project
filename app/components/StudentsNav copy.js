import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AllStudents from './AllStudents';
import AddStudentForm from './AddStudentForm';

class StudentsNav extends Component {
  constructor() {
    super();

    //this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive = () => {
    const menuAll = document.getElementById('all-students');
    const menuAdd = document.getElementById('add-students');
    menuAll.classList.toggle('hello-active');
    menuAdd.classList.toggle('hello-active');
  };

  render() {
    return (
      <Router>
        <div className="centered-parent">
          <div className="horiz-menu-row">
            <div className="ui fluid two item menu">
              <Fragment>
                <div
                  id="all-students"
                  className="hello-active"
                  onClick={this.toggleActive}
                >
                  <div className="item two-item-menu-item">
                    <NavLink to="/students">All Students</NavLink>
                  </div>
                </div>
                <div id="add-students" className="" onClick={this.toggleActive}>
                  <div className="item two-item-menu-item">
                    <NavLink to="/students/add">
                      Add A Student
                      <i className="plus square icon icon-padding"></i>
                    </NavLink>
                  </div>
                </div>
              </Fragment>
            </div>
          </div>
          <div id="main-section">
            {/* routes here */}
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/students/add" component={AddStudentForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default StudentsNav;
