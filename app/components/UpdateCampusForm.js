import React from 'react';

const UpdateCampusForm = props => {
  return (
    <div className="centered-parent">
      <div className="ui segment" id="form-segment-addC">
        <form className="ui form" onSubmit={props.handleSubmit}>
          <h4 className="ui dividing header">Update Campus Details</h4>
          <div className="two fields">
            <div className="seven wide field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={props.name}
                onChange={props.handleChange}
              />
            </div>

            <div className="nine wide field">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={props.address}
                onChange={props.handleChange}
              />
            </div>
          </div>

          <div className="fields">
            <div className="eight wide field">
              <label>Description</label>
              <input
                type="text"
                name="description"
                value={props.description}
                onChange={props.handleChange}
              />
            </div>
          </div>

          <button className="ui button" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampusForm;
