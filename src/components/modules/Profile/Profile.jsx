/**
 * Profile Page
 */
import React, { Component } from "react";
import { Tabs } from "antd";
import { EditFilled, FolderOpenFilled } from "@ant-design/icons";
import ViewProfile from "./ProfileView";
import EditProfile from "./ProfileEdit";

const { TabPane } = Tabs;

/**
 * @class Profile
 * @classdesc shows the view and edit tabs on profile ui
 */
class Profile extends Component {
  /**
   * @method componentDidMount
   */

  componentDidMount() {
    this.props.atnMenuSelectedKey("2");
  }
  /**
   * @method render
   * renders the ui on profile page
   */
  render() {
    const { profile, imageList, atnEditProfile, atnImageUpload } = this.props;
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
          <ViewProfile data={profile} imageList={imageList} />
        </TabPane>
        <TabPane
          tab={
            <span>
              <EditFilled data={profile} />
              edit
            </span>
          }
          key="2"
        >
          <EditProfile
            data={profile}
            imageList={imageList}
            atnEditProfile={atnEditProfile}
            atnImageUpload={atnImageUpload}
          />
        </TabPane>
      </Tabs>
    );
  }
}

export default Profile;
