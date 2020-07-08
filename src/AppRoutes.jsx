/**
 * App Routes
 */
import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UserRegistration from "./components/Users/UserRegistration";
import { message } from "antd";
import Signup from "./components/Login/Signup";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import UserDisplay from "./components/Users/UserDisplay";
import Login from "./components/Login/Login";

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
          <Route path="/register">
            <UserRegistration AtnAddUser={this.props.AtnAddUser} />
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
          <Route path="/users">
            <UserDisplay
              users={this.props.users}
              AtnEditUser={this.props.AtnEditUser}
              AtnDeleteUser={this.props.AtnDeleteUser}
            />
          </Route>
          <Route exact path="/">
            <Login AtnLogin={this.props.AtnLogin} />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

export default AppRoutes;
