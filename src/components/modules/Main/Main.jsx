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
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/images/ahex-logo.png";
import AppRoutes from "../../../AppRoutes";
import HeaderProfile from "./Header";

const { Header, Sider, Content } = Layout;

/**
 * @class Main
 * @classdesc Responsible to render every compnent
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
    const { isLoginSuccess } = this.props;
    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <img src={Logo} className="logo" alt="ahex-logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<TeamOutlined />}>
                <Link to="/users">Users</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <div>
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
                <HeaderProfile
                  atnLogout={this.props.atnLogout}
                  isLoginSuccess={this.props.isLoginSuccess}
                />
              </Header>
            </div>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <AppRoutes isLoginSuccess={isLoginSuccess} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Main;
