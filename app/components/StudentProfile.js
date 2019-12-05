import React, { Component, Fragment } from 'react';
import { connect, withRouter } from 'react-redux';
import { fetchSingleStudent } from '../redux/singleStudent';

//{ imageUrl, firstName, lastName, gpa, email }
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
    console.log('SPROFILE props', this.props);
    const student = this.props.student;
    const imageUrl = student.imageUrl || '';
    const firstName = student.firstName || '';
    const lastName = student.lastName || '';
    const gpa = student.gpa || 0.0;
    const email = student.email || '';

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
                {/* <div className="meta">
                <span className="cinema">7 projects</span>
              </div> */}
                {/* <div className="description">
                <p></p>
              </div> */}
                <div className="extra content">
                  <span className="right floated">{gpa}</span>
                  <span>
                    <i class="graduation cap icon"></i>
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
    loadSingleStudent: id => dispatch(fetchSingleStudent(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);

// export default withRouter(
//     connect(mapStateToProps, mapDispatchToProps)(StudentProfile)
//   );
