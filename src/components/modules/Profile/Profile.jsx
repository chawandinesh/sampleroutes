/**
 * Profile Page
 */
import React, { Component } from "react";
import { Tabs } from "antd";
import { EditFilled, FolderOpenFilled } from "@ant-design/icons";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

const { TabPane } = Tabs;

/**
 * @class Profile
 * @classdesc shows the view and edit tabs on profile ui
 */
class Profile extends Component {
  /**
   * @method render
   * renders the ui on profile page
   */
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <FolderOpenFilled />
              view
            </span>
          }
          key="1"
        >
          <ViewProfile data={this.props.profile} />
        </TabPane>
        <TabPane
          tab={
            <span>
              <EditFilled data={this.props.profile} />
              edit
            </span>
          }
          key="2"
        >
          <EditProfile
            data={this.props.profile}
            atnEditProfile={this.props.atnEditProfile}
          />
        </TabPane>
      </Tabs>
    );
  }
}

export default Profile;
