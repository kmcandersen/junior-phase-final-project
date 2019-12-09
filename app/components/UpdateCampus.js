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
    //console.log('UHandle ETV', evt.target.value);
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // console.log('PROPS INSIDE SUBMIT', this.props);
    const id = this.props.id;
    //console.log('INSIDE SUBMIT ID & STATE', id, this.state);
    // const id = Number(this.props.match.params.id);
    this.props.updateCampus(id, this.state);
    this.setState({
      name: '',
      address: '',
      description: ''
    });
  }

  render() {
    //console.log('UPDATE PROPS', singleStudent);
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

// mapState > populate form
// mapDispatch > access update route

export default connect(null, mapDispatchToProps)(UpdateCampus);
