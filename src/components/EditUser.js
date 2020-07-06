import React, { Component } from "react";
import { Form, Button, Modal } from "antd";
import UserForm from "./UserForm";

/**
 * @class @name EditUser
 * Component to update existing user data
 */
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
          </Form>
        </Modal>
      </div>
    );
  }
}

export default EditUser;
