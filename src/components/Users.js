/**
 * Displays the Available Users Data
 */
import React, { Component } from "react";
import { Modal } from "antd";
import UserTable from "./UserTable";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import EditUserModal from "./EditUserModal";

const { confirm } = Modal;

/**
 * @class @name Users
 * component to show the available user details
 */
class Users extends Component {
  constructor(props) {
    super(props);
    this.editFormRef = React.createRef();
    this.state = {
      visible: false,
      index: undefined,
    };
  }

  /**
   * @method @name handleEditButton
   * Show modal and fill existing details into form
   * to update the specific user data
   */
  handleEdit = (idx, value) => {
    this.setState({
      visible: true,
      index: idx,
    });

    setTimeout(() => {
      this.editFormRef.current.setFieldsValue({
        name: value.name,
        email: value.email,
        mobile: value.mobile,
        address: value.address,
      });
    }, 1000);
  };

  /**
   * @method @name handleDelete
   * to close the modal
   */
  handleModalCancel = () => {
    this.setState({
      visible: false,
    });
  };

  /**
   * @method @name onEditFinish
   * updates the data into users record
   * close the modal after updation
   */
  onEditFinish = (values) => {
    this.props.AtnEditUser(this.state.index, values);
    this.setState({
      visible: false,
    });
  };

  /**
   * @method @name handleDeleteButton
   * delete specific user data from the records
   */
  handleDelete = (indexValue) => {
    confirm({
      title: "Are you sure delete this User?",
      icon: <ExclamationCircleOutlined />,
      content: "It will make changes in your data",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        this.props.AtnDeleteUser(indexValue);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  /**
   * @render return the user data table on ui
   */
  render() {
    return (
      <div>
        <UserTable
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          data={this.props.users}
        />
        <EditUserModal
          visible={this.state.visible}
          handleOk={this.handleOk}
          handleEditCancel={this.handleModalCancel}
          layout={this.layout}
          onEditFinish={this.onEditFinish}
          editFormRef={this.editFormRef}
          buttonLayout={this.buttonLayout}
        />
      </div>
    );
  }
}

export default Users;