import React, { Component } from "react";
import { Link } from "react-router-dom";

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      surName: "",
      dateOfBirth: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  onChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };
  onChangeSurname = (e) => {
    this.setState({ surName: e.target.value });
  };
  onChangeDateOfBirth = (e) => {
    this.setState({ dateOfBirth: e.target.value });
  };
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onChangeConfirmPassword = (e) => {
    this.setState({ passwordConfirmation: e.target.value });
  };

  onSubmit = () => {
    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        surName: this.state.surName,
        dateOfBirth: this.state.dateOfBirth,
        email: this.state.email,
        password: this.state.password,
        passwordConfirmation: this.state.passwordConfirmation,
      }),
    }).then((response) => {
      return response.json();
    });
  };

  render() {
    return (
      <div className="container pt-5">
        <div className="row" style={{ textAlign: "-webkit-center" }}>
          <h1 className="pb-5">Sign up</h1>
          <form>
            <input
              style={{ width: "500px" }}
              type="text"
              class="form-control"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
            <input
              style={{ width: "500px" }}
              type="text"
              class="form-control"
              placeholder="Surname"
              value={this.state.surname}
              onChange={this.onChangeSurname}
            />
            <input
              type="date"
              style={{ width: "500px" }}
              //placeholder="mm/dd/yyyy"
              value={this.state.dateOfBirth}
              onChange={this.onChangeDateOfBirth}
            />
            <input
              style={{ width: "500px" }}
              type="text"
              class="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <input
              style={{ width: "500px" }}
              type="text"
              class="form-control"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <input
              style={{ width: "500px" }}
              type="text"
              class="form-control"
              placeholder="Confirm Password"
              value={this.state.passwordConfirmation}
              onChange={this.onChangeConfirmPassword}
            />
            <button
              type="submit"
              style={{ width: "100px" }}
              className="btn btn-primary"
              value="submit"
              onClick={this.onSubmit}
            >

              Submit
            </button>
            <Link className="text-decoration-none text-center fs-5" to="/login">Login</Link>

          </form>
        </div>
      </div>
    );
  }
}

export default signup;
