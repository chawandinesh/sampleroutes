/**
 * Sign in page
 */
import React, { PureComponent } from "react";
import { Form, message, Modal } from "antd";
import UserForm from "./UserForm";

/**
 * @class
 * @name UserRegistration screen
 */
class UserAddModal extends PureComponent {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      data: [],
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
   * @method onFinish
   * @param {object} values
   * to create new list with submitted data in User Record
   *
   */
  onFinish = (values) => {
    this.setState({
      data: [...this.state.data, values],
    });
    this.formRef.current.resetFields();
    this.props.atnAddUser(values);
    message.success("Successfully Added");
    this.props.atnUserModalToggle();
  };

  /**
   * @method @name handleOk
   * invokes after the submit button clicked
   */
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  /**
   * @method @name handleCancel
   * invokes when canceled the modal
   */
  handleCancel = () => {
    this.props.atnUserModalToggle();
  };

  /**
   * @render
   * returns the form to add new user into records
   */
  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          title="Add User"
          visible={this.props.isAddUserModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            {...this.layout}
            name="Form"
            onFinish={this.onFinish}
            ref={this.formRef}
          >
            <div className="userForm">
              <UserForm buttonLayout={this.buttonLayout} />
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default UserAddModal;
