import React, { Component } from 'react';
import axios from "axios"
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
        //this.onChangeFirstName= this.onChangeFirstName.bind(this)
        //this.onChangeSurname= this.onChangeSurname.bind(this)
        //this.onChangeEmail= this.onChangeEmail.bind(this)
        //this.onChangeDateOfBirth= this.onChangeDateOfBirth.bind(this)
        //this.onChangePassword= this.onChangePassword.bind(this)
        //this.onChangeConfirmPassword= this.onChangeFirstName.bind(this)
      }
    
      onChangeFirstName = (e) => {
        this.setState({ firstName: e.target.value });
      };
      onChangeSurname = (e) => {
        this.setState({ surname: e.target.value });
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

     

    //onSubmit = () => {
      //  fetch("http://localhost:8000/signup", {
      //    method: "POST",
      //    headers: {
      //      "Content-type": "application/json",
      //    },
      //    body: JSON.stringify({
      //      firstName: this.state.firstName,
      //      surname: this.state.surname,
      //      dateOfBirth: this.state.dateOfBirth,
      //      email: this.state.email,
      //      password: this.state.password,
      //      passwordConfirmation: this.state.passwordConfirmation,
      //    }),
      //  })
      //    .then((response) => {
      //      return response.json();
      //    })
      //    .then((response) => {
      //        console.log(response);
      //  });
      //}; ça n'as pas marcher du coupe j'ai essayer avec le package axios et lui aussi marche pas pffff
      onSubmit = e => {
        e.preventDefault();

        const registered = {
          firstName: this.state.firstName,
          surName: this.state.surName,
          dateOfBirth: this.state.dateOfBirth,
          email: this.state.email,
          password: this.state.password,
          passwordConfirmation: this.state.passwordConfirmation,
        };
    
        axios.post('http://localhost:8000/signup',registered)
          .then(response => console.log(response.data))
          this.setState = ({
            firstName: "",
            surName: "",
            dateOfBirth: "",
            email: "",
            password: "",
            passwordConfirmation: "",
        });
          
      }

    render() {
        return (
            <div className="container-fluid">
           
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <form >
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
                type="date" id="birthday" name="birthday"
                style={{ width: "500px" }}
                class="datepicker" data-date-format="mm/dd/yyyy"  
                placeholder="Date of birth"
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
              type='submit'
                style={{ width: "100px" }}
                className="btn btn-primary"
                value='submit'
                onClick={this.onSubmit}
              > Submit
              </button>
              </form>
            </div>
          </div>
        );
    }
}

export default signup;

