/**
 * Login Form
 */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import loginAuth from "../../../assets/data/login/login.json";
import Logo from "../../../assets/images/ahex-logo.png";

/**
 * @class @name Login
 * @classdesc Login form for the Application
 */
class Login extends Component {
  state = {
    checkedin: false,
  };
  layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  /**
   * @method onFinish
   * @params {values} to get the username,password from the login form after submit
   * compares login details for authentication
   */
  onFinish = (values) => {
    if (
      loginAuth.username === values.username &&
      loginAuth.password === values.password
    ) {
      this.props.atnLogin();
      this.props.history.push("/dashboard");
    } else {
      alert("failed to login");
    }
  };

  /**
   * @method @name handleChecked
   * changes the state of checkbox
   */
  handleChecked = () => {
    this.setState((prevState) => ({
      checkedin: !prevState.checkedin,
    }));
  };

  /**
   * @render
   * returns the login form ui
   */
  render() {
    return (
      <Modal
        show={true}
        backdrop="static"
        keyboard={false}
        className="login-modal"
        style={{ transition: "none" }}
      >
        <Modal.Body>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <img src={Logo} alt="ahex-logo" />
          </div>
          <Form
            {...this.layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              className="username"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              className="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item {...this.tailLayout} name="remember">
              <Checkbox
                checked={this.state.checkedin}
                onChange={this.handleChecked}
              >
                Remember me
              </Checkbox>
            </Form.Item>

            <Form.Item {...this.tailLayout}>
              <Button type="primary" htmlType="submit" className="login-button">
                Signin
              </Button>
            </Form.Item>
            <Row gutter={[80]}>
              <Col span={12}>
                <Form.Item {...this.tailLayout}>
                  <Button className="ForgotPasswordLogin" type="link">
                    Forgot Password?
                  </Button>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item {...this.tailLayout}>
                  <Button className="LoginRegister" type="link">
                    Register
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default withRouter(Login);
