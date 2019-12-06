import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleStudent, updateStudent } from '../redux/singleStudent';
import UpdateStudentForm from './UpdateStudentForm';

class UpdateStudent extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      gpa: '',
      email: '',
      campus: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    try {
      const id = Number(this.props.match.params.id);
      this.props.loadSingleStudent(id);
      //   this.setState({
      //     firstName: this.props.singleStudent.firstName,
      //     lastName: this.props.singleStudent.lastName,
      //     gpa: this.props.singleStudent.gpa,
      //     email: this.props.singleStudent.email
      //   });
    } catch (err) {
      console.log(err);
    }
  }

  handleChange(evt) {
    //console.log('UHandle ETV', evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const id = Number(this.props.match.params.id);
    this.props.updateStudent(id, this.state);
    //console.log('State after HSubmit', this.state);
    this.setState({
      firstName: '',
      lastName: '',
      gpa: '',
      email: '',
      campus: ''
    });
    //display confirm message

    //or student.id from props?
  }

  render() {
    //const { singleStudent } = this.props;
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
