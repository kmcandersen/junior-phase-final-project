import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postCampus } from '../redux/campuses';

class AddCampusForm extends Component {
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
    this.props.addCampus(this.state);
    this.setState({ name: '', address: '', description: '' });
  }

  render() {
    return (
      <div className="centered-parent">
        <div className="ui segment form-segment">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="two fields">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g., Pluto"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="123 Pluto Rd, Pluto"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label>Description</label>
              <input
                type="text"
                name="description"
                placeholder="Small but mighty"
                value={this.state.description}
                onChange={this.handleChange}
              />
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
    addCampus: campus => dispatch(postCampus(campus))
  };
};

//withRouter??
export default connect(null, mapDispatchToProps)(AddCampusForm);
