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
    //console.log('UHandle ETV', evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    //console.log('PROPS INSIDE SUBMIT', this.props);
    const id = this.props.id;
    //console.log('INSIDE SUBMIT ID & STATE', id, this.state);
    // const id = Number(this.props.match.params.id);
    this.props.updateStudent(id, this.state);
    //trying to update top profile when update form submitted:
    //this.props.loadSingleStudent(id);
    this.setState({
      firstName: '',
      lastName: '',
      gpa: '',
      email: ''
    });

    //or student.id from props?
  }

  render() {
    const { singleStudent } = this.props;
    //console.log('UPDATE PROPS', singleStudent);
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
  //console.log(state);
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

// mapState > populate form
// mapDispatch > access update route

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
