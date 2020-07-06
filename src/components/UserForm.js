import React, { Component } from "react";
import { Form, Input } from "antd";

class UserForm extends Component {
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
      </React.Fragment>
    );
  }
}

export default UserForm;
