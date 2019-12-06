import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postStudent } from '../redux/students';

class AddStudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gpa: '',
      email: ''
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
    this.props.addStudent(this.state);
    this.setState({ firstName: '', lastName: '', gpa: '', email: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="gpa"
          placeholder="GPA"
          value={this.state.gpa}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button type="submit">Add Student</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addStudent: student => dispatch(postStudent(student))
  };
};

//withRouter??
export default connect(null, mapDispatchToProps)(AddStudentForm);
