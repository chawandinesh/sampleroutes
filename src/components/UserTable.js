/**
 * User table to show the user data
 */
import React, { Component } from "react";
import { Table, Row, Col } from "antd";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

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
          <Col span={10}>
            <EditFilled
              style={{ color: "#2A8EF7", fontSize: "20px" }}
              onClick={() =>
                this.props.handleEdit(this.props.data.indexOf(record), record)
              }
            />
          </Col>
          <Col span={10}>
            <DeleteFilled
              style={{ color: "red", fontSize: "20px" }}
              danger="true"
              onClick={() =>
                this.props.handleDelete(this.props.data.indexOf(record))
              }
            />
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
