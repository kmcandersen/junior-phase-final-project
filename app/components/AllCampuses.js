import React, { Component } from 'react';
import CampusCard from './CampusCard';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses, removeCampus } from '../redux/campuses';
import { fetchStudents } from '../redux/students';

class AllCampuses extends Component {
  componentDidMount() {
    try {
      this.props.loadCampuses();
      this.props.loadStudents();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    //console.log('ALLCAMPUSES', this.props);
    const campuses = this.props.campuses.campuses;
    const students = this.props.students.students;

    return (
      <div className="centered-parent">
        <div className="horiz-menu-row">
          <button type="submit" className="ui basic button add-button">
            <Link to="/campuses/add">
              Add A Campus
              <i className="plus square icon icon-padding" />
            </Link>
          </button>
        </div>

        <div className="custom-list custom-card-list ui cards">
          {!campuses.length ? (
            <div className="horiz-menu-row">
              <div className="ui message">
                <div className="header header-msg">No Campuses</div>
              </div>
            </div>
          ) : (
            campuses.map(campus => {
              return (
                <div key={campus.id}>
                  <CampusCard
                    {...campus}
                    deleteCampus={this.props.deleteCampus}
                    numStudents={
                      students.filter(student => student.campusId === campus.id)
                        .length
                    }
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCampus: campus => dispatch(removeCampus(campus)),
    loadCampuses: () => dispatch(fetchCampuses()),
    loadStudents: () => dispatch(fetchStudents())
  };
};

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
