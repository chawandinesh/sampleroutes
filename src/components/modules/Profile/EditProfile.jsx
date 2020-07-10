/**
 * Edit Profile form
 */
import React, { Component } from "react";
import { Form, Button, Input, message } from "antd";

/**
 * @class @name EditProfile
 * @classdesc Shows the Form on ui to update the profile data
 */
class EditProfile extends Component {
  formRef = React.createRef();
  layout = {
    wrapperCol: { span: 8 },
  };
  tailLayout = {
    wrapperCol: { offset: 1 },
  };

  /**
   * @method componentDidMount
   * renders initially to set the data into form fields
   */
  componentDidMount() {
    this.formRef.current.setFieldsValue({
      name: this.props.data.name,
      about: this.props.data.about,
    });
  }

  /**
   * @method @name onFinish
   * @param values is the data submitted data from form
   */
  onFinish = (values) => {
    this.props.atnEditProfile(values);
    message.success("Updated successfully");
  };

  /**
   * @render returns the form ui on dom
   */
  render() {
    return (
      <Form
        {...this.layout}
        ref={this.formRef}
        className="edit-profile"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="About" name="about">
          <Input.TextArea rows={8} />
        </Form.Item>

        <Form.Item {...this.tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default EditProfile;
