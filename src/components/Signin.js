/**
 * Sign in page
 */
import React, { PureComponent } from "react";
import { Form, Input, Button } from "antd";

/**
 * @class
 * @name Signin screen
 */
class Signin extends PureComponent {
  /**
   * layout for the form
   */
  layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 6 },
  };
  buttonLayout = {
    labelCol: { span: 2 },
    wrapperCol: { offset: 2 },
  };

  /**
   * @method onFinish to get the submitted form data
   */
  onFinish = (values) => {
    console.log(values);
  };

  /**
   * @render to display the signin component screen
   */
  render() {
    return (
      <Form {...this.layout} name="Form" onFinish={this.onFinish}>
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

        <Form.Item {...this.buttonLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Signin;
