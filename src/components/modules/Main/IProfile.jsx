/**
 * IProfile
 */
import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import { withRouter } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

/**
 * @class @name IProfile
 * @classdesc component to show dropdown on right corner of header
 */
class IProfile extends Component {
  /**
   * @method @name handleSelect
   * selects the route as per the dropdown selection
   */
  handleSelect = (e) => {
    if (e !== "settings") {
      this.props.history.push(`/${e}`);
    }
  };

  /**
   * menu for showing list of options
   */
  menu = (
    <Menu>
      <Menu.Item key="0">
        <a role="button" onClick={(e) => this.handleSelect("profile")}>
          {" "}
          Profile
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a role="button" onClick={(e) => this.handleSelect("settings")}>
          {" "}
          settings
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a onClick={(e) => this.handleSelect("")}> Logout</a>
      </Menu.Item>
    </Menu>
  );

  /**
   * @render renders the icon on the header
   */
  render() {
    return (
      <Dropdown overlay={this.menu} trigger={["click"]}>
        <a
          className="ant-dropdown-link-profile"
          onClick={(e) => e.preventDefault()}
        >
          <span className="dot">^</span>

          <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}

export default withRouter(IProfile);
