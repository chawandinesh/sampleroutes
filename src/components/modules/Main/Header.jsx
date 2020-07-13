/**
 * Header
 */
import React, { Component } from "react";
import { Menu, Dropdown, Button } from "antd";
import { withRouter } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import _ from "lodash";

/**
 * @class @name Header
 * @classdesc component to show dropdown on right corner of header
 */
class Header extends Component {
  /**
   * @method @name handleSelect
   * selects the route as per the dropdown selection
   */
  handleSelect = (e) => {
    if (e !== "settings") {
      this.props.history.push(`/${e}`);
      if (e === "") {
        this.props.atnLogout();
      }
    }
  };

  /**
   * menu for showing list of options
   */
  menu = (
    <Menu>
      <Menu.Item key="0">
        <Button type="link" onClick={(e) => this.handleSelect("profile")}>
          {" "}
          Profile
        </Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button type="link" onClick={(e) => this.handleSelect("settings")}>
          {" "}
          settings
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="link" onClick={(e) => this.handleSelect("")}>
          {" "}
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  /**
   * @render renders the icon on the header
   */
  render() {
    return (
      <Dropdown overlay={this.menu} trigger={["click"]}>
        <Button
          type="default"
          className="ant-dropdown-link-profile"
          onClick={(e) => e.preventDefault()}
        >
          {this.props.imageList.length ? (
            <img
              className="header-profile-image"
              src={`${_.get(this.props.imageList[0], "thumbUrl")}`}
              alt="profileImage"
            />
          ) : (
            <span className="dot">
              <p className="text">A</p>
            </span>
          )}

          <DownOutlined />
        </Button>
      </Dropdown>
    );
  }
}

export default withRouter(Header);
