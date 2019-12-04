import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';

//{ imageUrl, firstName, lastName, gpa, email }
class StudentProfile extends Component {
  componentDidMount() {
    try {
      this.props.loadSingleStudent(this.props.match.params.studentId);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    console.log('SPROFILE props', this.props);
    return (
      <Fragment>
        <div className="custom-list">
          {/* separates student profile from campus cards */}
          <div className="ui divider"></div>
          {/* campus cards here */}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    student: state.student
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSingleStudent: studentId => dispatch(fetchSingleStudent(studentId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
