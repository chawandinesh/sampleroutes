/**
 * User table to show the user data
 */
import React, { Component } from "react";
import { Table, Row, Col, Button } from "antd";

/**
 * @class @name UserTable
 * creates table to show the user details
 */
class UserTable extends Component {
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <Row>
          <Col span={8}>
            <Button
              type="primary"
              onClick={() =>
                this.props.handleEditButton(
                  this.props.data.indexOf(record),
                  record
                )
              }
            >
              Edit
            </Button>{" "}
          </Col>
          <Col span={8}>
            <Button
              danger
              onClick={() =>
                this.props.handleDeleteButton(this.props.data.indexOf(record))
              }
            >
              Delete
            </Button>
          </Col>
        </Row>
      ),
    },
  ];

  /**
   * @render
   * display the user data into tables
   */
  render() {
    return (
      <Table
        columns={this.columns}
        dataSource={this.props.data}
        pagination={false}
        rowKey={(record) => record.mobile}
      />
    );
  }
}

export default UserTable;
