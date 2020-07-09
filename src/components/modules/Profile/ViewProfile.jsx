/**
 * View Profile
 */
import React, { Component } from "react";
import { Card } from "antd";

/**
 * @class @name ViewProfile
 * shows the profile data (read only)
 */
class ViewProfile extends Component {
  render() {
    const { data } = this.props;
    return (
      <Card title={data.name} className="profie-view-card">
        <p>{data.about}</p>
      </Card>
    );
  }
}

export default ViewProfile;
