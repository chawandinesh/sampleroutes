/**
 * Dashboard page
 */

import React, { Component } from "react";

/**
 * @class @name Dashboard
 */
class Dashboard extends Component {
  /**
   * @method componentDidMount
   * renders initially after ui mount to set the menu selection key
   */
  componentDidMount() {
    this.props.atnMenuSelectedKey("1");
  }

  /**
   * @render
   * returns fallback ui on page
   */
  render() {
    return (
      <div>
        <h1>Dashboard page</h1>
      </div>
    );
  }
}

export default Dashboard;
