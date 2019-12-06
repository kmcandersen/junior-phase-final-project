import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { addStudent } from '../redux/students';

class AddStudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gpa: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    console.log('ChangeETV', evt.target.name, evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    //console.log('SubmitETV', evt.target.value);

    this.props.postStudent(this.state);
    this.setState({ firstName: '', lastName: '', gpa: 0 });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          //onChange={evt => this.setState({ firstName: evt.target.value })}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          //onChange={evt => this.setState({ lastName: evt.target.value })}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="gpa"
          placeholder="GPA"
          value={this.state.GPA}
          //onChange={evt => this.setState({ gpa: evt.target.value })}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          //   onClick={() => {
          //     this.props.postStudent(this.state);
          //     this.setState({ firstName: '', lastName: '', gpa: 0 });
          //   }}
        >
          Add Student
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postStudent: student => dispatch(addStudent(student))
  };
};

//withRouter??
export default connect(null, mapDispatchToProps)(AddStudentForm);
