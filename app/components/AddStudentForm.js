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
      <div className="centered-parent">
        <div className="ui segment form-segment">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="two fields">
              <div className="field">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="e.g., Helena"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Handbasket"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="fields">
              <div className="two wide field">
                <label>GPA</label>
                <input
                  type="text"
                  name="gpa"
                  placeholder="4.0"
                  value={this.state.gpa}
                  onChange={this.handleChange}
                />
              </div>
              <div className="seven wide field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="helenahandbasket@gmail.com"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              {/* <div className="seven wide field">
                <label>Campus</label>
                <input
                  type="text"
                  name="campus"
                  placeholder="Pluto"
                  value={this.state.campus}
                  onChange={this.handleChange}
                />
              </div> */}
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
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
