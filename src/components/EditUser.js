import React, { Component } from "react";
import { Form, Button, Modal } from "antd";
import UserForm from "./UserForm";

class EditUser extends Component {
  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
        >
          <Form
            {...this.props.layout}
            name="Form"
            onFinish={this.props.onEditFinish}
            ref={this.props.editFormRef}
          >
            <UserForm />
            <Form.Item {...this.props.buttonLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default EditUser;
