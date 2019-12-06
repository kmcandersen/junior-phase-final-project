import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent, updateStudent } from '../redux/singleStudent';

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

  async componentDidMount() {
    try {
      const id = Number(this.props.match.params.id);
      this.props.loadSingleStudent(id);
    } catch (err) {
      console.log(err);
    }

    this.setState({
      firstName: this.props.singleStudent.firstName,
      lastName: this.props.singleStudent.lastName,
      gpa: this.props.singleStudent.gpa,
      email: this.props.singleStudent.email
      //warningMessage: 'Field is required!'
      // note: it's preferable to only set the warning message here rather than hard-code it
      // as a prop so that we avoid "flashing" it when the component initially renders
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const id = Number(this.props.match.params.id);
    this.props.updateStudent(id, this.state);
    //display confirm message

    //or student.id from props?
  }

  render() {
    console.log('update props', this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder={this.state.firstName}
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder={this.state.lastName}
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="gpa"
          placeholder={this.state.gpa}
          value={this.state.gpa}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder={this.state.email}
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button type="submit">Update Student</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudentForm);
