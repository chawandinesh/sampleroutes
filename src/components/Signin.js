/**
 * Sign in page
 */
import React, { PureComponent } from "react";
import { Form, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import EditUserModal from "./EditUserModal";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

const { confirm } = Modal;

/**
 * @class
 * @name Signin screen
 */
class Signin extends PureComponent {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.editFormRef = React.createRef();
    this.state = {
      data: [],
      visible: false,
      editIndexValue: undefined,
    };
  }

  /**
   * layout for the form
   */
  layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  buttonLayout = {
    labelCol: { span: 2 },
    wrapperCol: { offset: 4 },
  };

  /**
   * @method
   * @name handleModalCancel
   * to disable the modal after clicking cancel
   */
  handleModalCancel = () => {
    this.setState({
      visible: false,
    });
  };

  /**
   * @method
   * @name handleEdit
   * to update the existing task
   */
  handleEdit = (indexValue) => {
    this.setState({
      visible: true,
      editIndexValue: indexValue,
    });
    const dataValues = this.state.data[indexValue];
    setTimeout(() => {
      this.editFormRef.current.setFieldsValue({
        name: dataValues.name,
        email: dataValues.email,
        mobile: dataValues.mobile,
        address: dataValues.address,
      });
    }, 1000);
  };

  /**
   * @method @name handleDelete
   * to delete the specific task
   */
  handleDelete = (indexValue) => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "It will make changes in your data",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk: () => {
        this.state.data.splice(indexValue, 1);
        this.setState({
          data: [...this.state.data],
        });
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  /**
   * @method onFinish
   * to create new list with submitted data in User Record
   *
   */
  onFinish = (values) => {
    this.setState({
      data: [...this.state.data, values],
    });
    this.formRef.current.resetFields();
  };

  /**
   * @method onEditFinish
   * to update existing list with new values
   */
  onEditFinish = (values) => {
    this.state.data.splice(this.state.editIndexValue, 1, values);
    this.setState({
      data: [...this.state.data],
      visible: false,
    });
    this.editFormRef.current.resetFields();
  };

  /**
   * @render to display the signin component screen
   */
  render() {
    return (
      <Form
        {...this.layout}
        name="Form"
        onFinish={this.onFinish}
        ref={this.formRef}
      >
        <UserForm buttonLayout={this.buttonLayout} />

        <EditUserModal
          visible={this.state.visible}
          handleOk={this.handleOk}
          handleCancel={this.handleModalCancel}
          layout={this.layout}
          onEditFinish={this.onEditFinish}
          editFormRef={this.editFormRef}
          buttonLayout={this.buttonLayout}
        />
        <UserTable
          data={this.state.data}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </Form>
    );
  }
}

export default Signin;
