/**
 * User Form
 */
import React, { Component } from "react";
import { Form, Input, Button } from "antd";

/**
 * @class @name UserForm
 * form to register the new user and update the user
 */
class UserForm extends Component {
  /**
   * @render returns form ui on to the screen
   */
  render() {
    return (
      <React.Fragment>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ type: "email" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Mobile" name="mobile">
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input.TextArea />
        </Form.Item>
        <Form.Item {...this.props.buttonLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </React.Fragment>
    );
  }
}

export default UserForm;
