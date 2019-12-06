import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postCampus } from '../redux/campuses';

class AddCampusForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      address: ''
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
    this.props.addCampus(this.state);
    this.setState({ name: '', description: '', address: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <button type="submit">Add Campus</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCampus: campus => dispatch(postCampus(campus))
  };
};

//withRouter??
export default connect(null, mapDispatchToProps)(AddCampusForm);
