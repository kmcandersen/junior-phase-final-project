import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../redux/campuses';
import CampusProfile from './CampusProfile';
import StudentCampusCard from './StudentCampusCard';
import UpdateCampus from './UpdateCampus';

class SingleCampus extends Component {
  componentDidMount() {
    try {
      const id = Number(this.props.match.params.id);
      this.props.loadSingleCampus(id);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const campus = this.props.campus;
    //console.log('SingleCampus PROPS', campus);

    const students = this.props.students;
    const filteredStudents = students.filter(
      student => student.campusId === Number(this.props.match.params.id)
    );

    const studentMessage = num => {
      if (num > 1) {
        return num + ' students';
      } else if (num === 1) {
        return num + ' student';
      }
      return 'No students enrolled';
    };

    return (
      <Fragment>
        <CampusProfile
          {...campus}
          campusStudents={studentMessage(filteredStudents.length)}
        />
        <div className="ui divider" />

        <div className="custom-list custom-card-list ui cards">
          {!filteredStudents.length ? (
            <p>NO STUDENTS ENROLLED</p>
          ) : (
            filteredStudents.map(student => {
              return (
                <div key={student.id}>
                  <StudentCampusCard {...student} />
                </div>
              );
            })
          )}
        </div>
        <UpdateCampus {...campus} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    campus: state.campuses.singleCampus,
    students: state.students.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSingleCampus: id => dispatch(fetchSingleCampus(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
