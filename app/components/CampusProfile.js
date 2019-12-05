import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../redux/singleCampus';

class CampusProfile extends Component {
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

    const imageUrl = campus.imageUrl || '';
    const name = campus.name || '';
    const description = campus.description || '';
    const address = campus.address || '';

    const students = this.props.students;
    const filteredStudents = students.filter(
      student => student.campusId === Number(this.props.match.params.id)
    ).length;

    const studentMessage = num => {
      if (num > 1) {
        return num + ' students';
      } else if (num === 1) {
        return num + ' student';
      }
      return 'No students enrolled';
    };

    return (
      <div className="custom-list">
        <div className="ui divided items custom-items ">
          <div className="item custom-item">
            <div className="image custom-image">
              <img src={imageUrl}></img>
            </div>
            <div className="content">
              <span className="header">{name}</span>
              <div className="meta">
                <span className="cinema">{description}</span>
              </div>
              {/* <div className="description">
                <p></p>
              </div> */}
              <div className="extra content">
                <span className="right floated">{address}</span>
                <span>
                  <i className="map marker alternate icon"></i>
                  Address
                </span>
              </div>
              <div className="ui divider div-sm"></div>
              <div className="extra content">
                <span className="right floated"></span>
                <span>
                  <i className="user icon"></i>
                  {studentMessage(filteredStudents)}
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
        {/* separates campus profile from student cards */}
        <div className="ui divider">{/* student cards here */}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    campus: state.singleCampus,
    students: state.students
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSingleCampus: id => dispatch(fetchSingleCampus(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusProfile);
