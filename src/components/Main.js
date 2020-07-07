/**
 * Main Component
 */
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UserAddOutlined,
  SelectOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "../App.css";
import AppRoutes from "../AppRoutes";

const { Header, Sider, Content } = Layout;

/**
 * @class Main
 * Responsible to render every compnent
 */
class Main extends React.PureComponent {
  state = {
    collapsed: false,
  };

  /**
   * @method @name toggle
   * to enable and disable the sider menu
   */
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  /**
   * @render to display  component on the ui
   */
  render() {
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1" icon={<SelectOutlined />}>
                <Link to="/signin">Signin</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserAddOutlined />}>
                <Link to="/signup">Signup</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<TeamOutlined />}>
                <Link to="/users">Users</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <AppRoutes
                AtnAddUser={this.props.AtnAddUser}
                users={this.props.state}
                AtnDeleteUser={this.props.AtnDeleteUser}
                AtnEditUser={this.props.AtnEditUser}
              />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Main;
