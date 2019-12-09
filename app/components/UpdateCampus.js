import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampus } from '../redux/campuses';
import UpdateCampusForm from './UpdateCampusForm';

class UpdateCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      description: ''
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
    this.props.updateCampus(id, this.state);
    this.setState({
      name: '',
      address: '',
      description: ''
    });
  }

  render() {
    return (
      <UpdateCampusForm
        {...this.state}
        key={this.state.id}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCampus: (id, campus) => dispatch(updateCampus(id, campus))
  };
};

export default connect(null, mapDispatchToProps)(UpdateCampus);
