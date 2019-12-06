return (
  <div className="centered-parent">
    <div className="ui segment form-segment">
      <form className="ui form" onSubmit={props.handleSubmit}>
        <div className="two fields">
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="e.g., Helena"
              value={props.firstName}
              onChange={props.handleChange}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Handbasket"
              value={props.lastName}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="three fields">
          <div className="field">
            <label>GPA</label>
            <input
              type="text"
              name="gpa"
              placeholder="4.0"
              value={props.gpa}
              onChange={props.handleChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="helenahandbasket@gmail.com"
              value={props.email}
              onChange={props.handleChange}
            />
          </div>
          <div className="field">
            <label>Campus</label>
            <input
              type="text"
              name="campus"
              placeholder="Pluto"
              value={props.campus}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
);
