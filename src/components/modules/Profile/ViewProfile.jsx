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
    const { data, imageList } = this.props;
    return (
      <div>
        <Card title={data.name} className="profie-view-card">
          <p>{data.about}</p>
        </Card>
        <div className="profile-view-image-list">
          {imageList &&
            imageList.map((e, idx) => (
              <Card key={idx}>
                <img
                  src={`${e.thumbUrl}`}
                  alt="image"
                  className="profie-view-image-card"
                />
              </Card>
            ))}
        </div>
      </div>
    );
  }
}

export default ViewProfile;
