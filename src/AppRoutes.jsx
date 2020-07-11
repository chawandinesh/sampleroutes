/**
 * App Routes
 */
import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "./components/modules/Profile";
import Dashboard from "./components/modules/Dashboard";
import UserDisplay from "./components/modules/Users";
import Login from "./components/modules/Login";

/**
 * contains all the required routes  for the application
 * @class
 * @name AppRoutes
 */
class AppRoutes extends Component {
  render() {
    const { isLoginSuccess } = this.props;
    return (
      <Fragment>
        {!isLoginSuccess && <Redirect to="/" />}
        {/*  Switch looks through its children Routes and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/users">
            <UserDisplay />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoutes;
