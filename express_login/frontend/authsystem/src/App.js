import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Admin from "./components/Admin"
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

