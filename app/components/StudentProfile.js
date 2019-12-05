import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleStudent } from '../redux/singleStudent';

class StudentProfile extends Component {
  componentDidMount() {
    try {
      const id = Number(this.props.match.params.id);
      this.props.loadSingleStudent(id);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const student = this.props.student;
    // const {
    //   imageUrl,
    //   firstName,
    //   lastName,
    //   campus,
    //   gpa,
    //   email
    // } = this.props.student;

    const imageUrl = student.imageUrl || '';
    const firstName = student.firstName || '';
    const lastName = student.lastName || '';
    //const campus = student.campus || {};
    const gpa = student.gpa || 0.0;
    const email = student.email || '';

    const notEnrolled = 'Not currently enrolled';
    const campus = this.props.student.campus || notEnrolled;

    return (
      <div className="custom-list">
        <div className="ui divided items custom-items ">
          <div className="item custom-item">
            <div className="image custom-image">
              <img src={imageUrl}></img>
            </div>
            <div className="content">
              <span className="header">{`${firstName} ${lastName}`}</span>

              {campus === 'Not currently enrolled' ? (
                <div className="meta">
                  <span className="cinema">{notEnrolled}</span>
                </div>
              ) : (
                <Link to={`/campuses/${campus.id}`}>
                  <div className="meta">
                    <span className="cinema">{campus.name} campus</span>
                  </div>
                </Link>
              )}
              {/* <div className="description">
                <p></p>
              </div> */}
              <div className="extra content">
                <span className="right floated">{gpa}</span>
                <span>
                  <i className="graduation cap icon"></i>
                  GPA
                </span>
              </div>
              <div className="ui divider div-sm"></div>
              <div className="extra content">
                <span className="right floated">{email}</span>
                <span>
                  <i className="envelope icon"></i>
                  Email
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
        {/* separates student profile from campus cards */}
        <div className="ui divider">{/* campus cards here */}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    student: state.singleStudent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSingleStudent: id => dispatch(fetchSingleStudent(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
