/**
 * Sign in page
 */
import React, { PureComponent } from "react";
import { Form, message } from "antd";
import UserForm from "./UserForm";

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
  };

  /**
   * @render
   * returns the form to add new user into records
   */
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default UserRegistration;
