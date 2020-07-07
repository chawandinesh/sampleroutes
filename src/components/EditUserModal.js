/**
 * Edit User
 */
import React, { Component } from "react";
import { Form, Modal } from "antd";
import UserForm from "./UserForm";

/**
 * @class @name EditUserModal
 * Component to update existing user data
 */
class EditUserModal extends Component {
  /**
   * @render
   * shows modal for update existing data
   */
  render() {
    return (
      <div>
        <Modal
          title="Edit User"
          visible={this.props.visible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleEditCancel}
        >
          <Form
            {...this.props.layout}
            name="Form"
            onFinish={this.props.onEditFinish}
            ref={this.props.editFormRef}
          >
            <div className="editUserForm">
              <UserForm />
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default EditUserModal;
