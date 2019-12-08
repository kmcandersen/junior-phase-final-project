import React from 'react';

const UpdateStudentForm = props => {
  //console.log('FORM props', props);
  return (
    <div className="centered-parent">
      <div className="ui segment" id="form-segment-addS">
        <form className="ui form" onSubmit={props.handleSubmit}>
          <h4 className="ui dividing header">Update Student Details</h4>
          <div className="two fields">
            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={props.firstName}
                onChange={props.handleChange}
              />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={props.lastName}
                onChange={props.handleChange}
              />
            </div>
          </div>

          <div className="fields">
            <div className="two wide field">
              <label>GPA</label>
              <input
                type="text"
                name="gpa"
                value={props.gpa}
                onChange={props.handleChange}
              />
            </div>
            <div className="seven wide field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={props.email}
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

export default UpdateStudentForm;
