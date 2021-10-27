import React, { Component } from "react";

class Signup extends Component {
  state = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  inputHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  formHandleSubmit = (e) => {
    const { fullname, email, password } = this.state;
    e.preventDefault();
    const newUser = {
      fullname: fullname,
      email: email,
      password: password,
    };
    this.setState({
      fullname: "",
      email: "",
      password: "",
      newUser: newUser,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formHandleSubmit} className="addAlbum-form">
          <h2 className="form_title">Sign up Here</h2>
          <input
            name="fullname"
            type="text"
            placeholder="Full Name"
            onChange={this.inputHandleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.inputHandleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.inputHandleChange}
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            onChange={this.inputHandleChange}
          />
          <button className="btn" type="submit">
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
