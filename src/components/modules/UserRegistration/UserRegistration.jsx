/**
 * Sign in page
 */
import React, { PureComponent } from "react";
import { Form, message, Modal } from "antd";
import { withRouter } from "react-router-dom";
import UserForm from "../Users/UserForm";

/**
 * @class
 * @name UserRegistration screen
 */
class UserRegistration extends PureComponent {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      data: [],
      visible: true,
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
   * to create new list with submitted data in User Record
   *
   */
  onFinish = (values) => {
    this.setState({
      data: [...this.state.data, values],
    });
    this.formRef.current.resetFields();
    this.props.AtnAddUser(values);
    message.success("Successfully Added");
    this.props.history.push("/users");
  };

  handleOk = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
    this.props.history.push("/users");
  };

  handleCancel = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
    this.props.history.push("/users");
  };

  /**
   * @render
   * returns the form to add new user into records
   */
  render() {
    return (
      <div>
        <Modal
          title="Add User"
          visible={this.state.visible}
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

export default withRouter(UserRegistration);
