import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent, updateStudent } from '../redux/students';
import UpdateStudentForm from './UpdateStudentForm';

class UpdateStudent extends Component {
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
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const id = this.props.id;
    this.props.updateStudent(id, this.state);
    this.setState({
      firstName: '',
      lastName: '',
      gpa: '',
      email: ''
    });
  }

  render() {
    return (
      <UpdateStudentForm
        {...this.state}
        key={this.state.id}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
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
    updateStudent: (id, student) => dispatch(updateStudent(id, student)),
    loadSingleStudent: id => dispatch(fetchSingleStudent(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
