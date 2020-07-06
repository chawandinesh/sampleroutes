/**
 * Sign in page
 */
import React, { PureComponent } from "react";
import { Form, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import EditUser from "./EditUser";
import { withRouter } from "react-router-dom";
import EditList from "./UserList";
import TaskForm from "./UserForm";
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
    labelCol: { span: 2 },
    wrapperCol: { span: 6 },
  };
  buttonLayout = {
    labelCol: { span: 2 },
    wrapperCol: { offset: 2 },
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
      content: "Some descriptions",
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
    console.log(values, this.state.editIndexValue);
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
        <TaskForm />
        <Form.Item {...this.buttonLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <EditUser
          visible={this.state.visible}
          handleOk={this.handleOk}
          handleCancel={this.handleModalCancel}
          layout={this.layout}
          onEditFinish={this.onEditFinish}
          editFormRef={this.editFormRef}
          buttonLayout={this.buttonLayout}
        />

        <EditList
          formData={this.state.data}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </Form>
    );
  }
}

export default withRouter(Signin);
