import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      newStudent: "",
    };
  }

  onChange = (e) => {
    this.setState({ newStudent: e.target.value });
  };

  addName = () => {
    fetch("http://localhost:8000/students/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.newStudent,
      }),
      //.then(())     //faut que je pose la question lundi pour comment faire un get après post automatiqument sans rafrichir la page
    });
  };

  componentDidMount() {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          students: res,
        });
      });
  }

  render() {
    return (
      <div className="text-center">
        <h1>Welcom to our dev class</h1>
        {this.state.students.map((student) => {
          return <p>{student}</p>;
        })}
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            style={{ width: "500px" }}
            type="text"
            class="form-control"
            placeholder="Enter your name"
            value={this.state.newStudent}
            onChange={this.onChange}
          />
          <button
            style={{ width: "100px" }}
            className="btn btn-primary"
            onClick={this.addName}
          > add
          </button>
        </div>
      </div>
    );
  }
}
