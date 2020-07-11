/**
 * Edit Profile form
 */
import React, { Component } from "react";
import { Form, Button, Input, message, Row, Col } from "antd";
import EditPicture from "./ProfilePictureEdit";

/**
 * @class @name ProfileEdit
 * @classdesc Shows the Form on ui to update the profile data
 */
class ProfileEdit extends Component {
  formRef = React.createRef();
  layout = {
    wrapperCol: { span: 8 },
  };
  tailLayout = {
    wrapperCol: { offset: 2 },
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
      <Col>
        <Row span={12}>
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
        </Row>
        <Row>
          <EditPicture
            imageList={this.props.imageList}
            atnImageUpload={this.props.atnImageUpload}
          />
        </Row>
      </Col>
    );
  }
}

export default ProfileEdit;
