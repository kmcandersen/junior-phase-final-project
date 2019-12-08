import React from 'react';

const UpdateStudentForm = props => {
  //console.log('FORM props', props);
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={props.firstName}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={props.lastName}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="gpa"
        placeholder="GPA"
        value={props.gpa}
        onChange={props.handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={props.email}
        onChange={props.handleChange}
      />
      <button type="submit">Update Student</button>
    </form>
  );
};

export default UpdateStudentForm;
