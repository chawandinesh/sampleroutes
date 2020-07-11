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
class UserEditModal extends Component {
  /**
   * @render
   * shows modal for update existing data
   */
  render() {
    const {
      visible,
      handleEditCancel,
      handleOk,
      layout,
      onEditFinish,
      editFormRef,
    } = this.props;
    return (
      <div>
        <Modal
          title="Edit User"
          visible={visible}
          onOk={handleOk}
          onCancel={handleEditCancel}
          footer={null}
        >
          <Form
            {...layout}
            name="Form"
            onFinish={onEditFinish}
            ref={editFormRef}
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

export default UserEditModal;
