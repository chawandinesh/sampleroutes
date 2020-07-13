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
  LineChartOutlined,
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
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              selectedKeys={this.props.menuSelelectedKey}
            >
              <Menu.Item key="1" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<TeamOutlined />}>
                <Link to="/users">Users</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<LineChartOutlined />}>
                <Link to="/charts">Charts</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              <div>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </div>
              <div className="header-collapse-profile">
                <HeaderProfile
                  atnLogout={this.props.atnLogout}
                  isLoginSuccess={this.props.isLoginSuccess}
                  imageList={this.props.imageList}
                  atnMenuSelectedKey={this.props.atnMenuSelectedKey}
                />
              </div>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
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
