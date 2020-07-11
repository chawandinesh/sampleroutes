/**
 * View Profile
 */
import React, { Component } from "react";
import { Card } from "antd";
import _ from "lodash";

/**
 * @class @name ProfileView
 * shows the profile data (read only)
 */
class ProfileView extends Component {
  render() {
    const { data, imageList } = this.props;
    return (
      <div>
        <Card title={data.name} className="profie-view-card">
          <p>{data.about}</p>
        </Card>
        <div className="profile-view-image-list">
          {imageList.length ? (
            <Card>
              <img
                src={`${_.get(imageList[0], "thumbUrl")}`}
                alt="profileImage"
                className="profie-view-image-card"
              />
            </Card>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default ProfileView;
