import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';
import { Link } from 'react-router-dom';
import UpdateStudent from './UpdateStudent';

class StudentPage extends Component {
  componentDidMount() {
    try {
      const id = Number(this.props.match.params.id);

      this.props.loadSingleStudent(id);
    } catch (err) {
      console.log(err);
    }
  }
  // ***NOTE!! I wasn't able to successfully pass props to a separate "Student Profile" (above the divider) component; otherwise it would have been separate
  render() {
    const { singleStudent } = this.props;
    const imageUrl = singleStudent.imageUrl || '';
    const firstName = singleStudent.firstName || '';
    const lastName = singleStudent.lastName || '';
    const gpa = singleStudent.gpa || 0.0;
    const email = singleStudent.email || '';
    const notEnrolled = 'Not enrolled';
    const campus = singleStudent.campus || notEnrolled;

    return (
      <Fragment>
        <div className="custom-list">
          <div className="ui divided items custom-items ">
            <div className="item custom-item">
              <div className="image custom-image">
                <img src={imageUrl}></img>
              </div>
              <div className="content">
                <span className="header">{`${firstName} ${lastName}`}</span>

                {campus === 'Not enrolled' ? (
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
                <div className="extra content">
                  <span className="right floated">{gpa}</span>
                  <span>
                    <i className="graduation cap icon"></i>
                    GPA
                  </span>
                </div>
                <div className="ui divider div-sm"></div>
                <div className="extra content">
                  <span>
                    <i className="envelope icon"></i>
                    Email
                    <span className="right floated">{email}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui divider" />
        <UpdateStudent {...singleStudent} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleStudent: state.singleStudent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSingleStudent: id => dispatch(fetchSingleStudent(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPage);
