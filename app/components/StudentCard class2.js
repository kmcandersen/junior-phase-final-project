import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeStudent } from '../redux/singleStudent';

//doesn't inherit props; loads SingleStudent based on mapped props?

//tried to grab inherited props in constructor, populate state with id, then call deleteStudent with id from state
class StudentCard extends Component {
  render() {
    const { id, imageUrl, firstName, lastName, gpa, email } = this.props;

    //is removeStudent here?
    console.log('props inside', this.props);

    const notEnrolled = 'Not enrolled';
    const campus = this.props.campus || notEnrolled;

    return (
      <div className="custom-card">
        <div className="ui card">
          <div className="image">
            <img src={imageUrl}></img>
          </div>
          <div className="content">
            <Link to={`/students/${id}`}>
              <div className="header">{`${firstName} ${lastName}`}</div>
            </Link>
          </div>

          <div className="extra content">
            {campus === 'Not enrolled' ? (
              <Fragment>
                <span className="right floated">{notEnrolled}</span>
                <span>
                  <i className="building icon"></i>
                  Campus
                </span>
              </Fragment>
            ) : (
              <Link to={`/campuses/${campus.id}`}>
                <span className="right floated">{campus.name}</span>
                <span>
                  <i className="building icon"></i>
                  Campus
                </span>
              </Link>
            )}
          </div>

          <div className="extra content">
            <span className="right floated">{gpa}</span>
            <span>
              <i className="graduation cap icon"></i>
              GPA
            </span>
          </div>
          <div className="extra content">
            <span>
              <i className="envelope icon"></i>
              {email}
            </span>
          </div>
          <div className="extra content">
            <span className="right floated">
              <button
                type="submit"
                className="ui label delete-button"
                // onClick={()=>handleClick(evt, id)}
              >
                <i className="minus square icon"></i>
                Delete
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent: student => dispatch(removeStudent(student))
  };
};

export default connect(null, mapDispatchToProps)(StudentCard);
