import React, { Component } from "react";
import {  Link } from "react-router-dom";
class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  onSubmit = () => {
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((response) => {
      return response.json();
    });
  };

  render() {
    return (
      <div className="container pt-5">
        <div className="row" style={{ textAlign: "-webkit-center" }}>
          <h1 className="pb-5">Log in</h1>
          <form>
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
          </form>
          <div>
          <button
              type="submit"
              style={{ width: "100px" }}
              className="btn btn-primary"
              value="submit"
              onClick={this.onSubmit}
            >
              login
            </button>
            <Link className="text-decoration-none text-center fs-5" to="/signup">Signup</Link>        
          </div>
        </div>
      </div>
    );
  }
}

export default login;
