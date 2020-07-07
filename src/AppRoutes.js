/**
 * App Routes
 */
import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

/**
 * contains all the required routes  for the application
 * @class
 * @name AppRoutes
 */
class AppRoutes extends Component {
  render() {
    return (
      <Fragment>
        {/*  Switch looks through its children Routes and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <h1>Welcome</h1>
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoutes;
