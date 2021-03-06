/**
 * User table to show the user data
 */
import React, { Component } from "react";
import { Table, Row, Col, Input, Button, Space, Tooltip } from "antd";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import {
  EditFilled,
  DeleteFilled,
  SearchOutlined,
  UserAddOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import UserAddModal from "./UserAddModal";
import exportToPdf from "../../../shared/exportToPdf";
import exportToExcel from "../../../shared/exportToExcel";

/**
 * @class @name UserTable
 * creates table to show the user details
 */
class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchedColumn: "",
      userModalVisible: false,
    };
  }

  handleAddUser = () => {
    this.props.atnUserModalToggle();
  };

  /**
   * @method getColumnSearchProps
   * contains a ui to search the specific entity in user table
   */
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  /**
   * @method handleSearch
   * handle the search action for the entities of the table
   */
  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  /**
   * @method handle reset
   * reset to initial state to table
   */
  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  /**
   * columns for the users table
   */
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...this.getColumnSearchProps("name"),
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...this.getColumnSearchProps("email"),
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      ...this.getColumnSearchProps("mobile"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <Row>
          <Col span={10}>
            <Tooltip placement="topRight" title="Edit">
              <EditFilled
                style={{ color: "#2A8EF7", fontSize: "20px" }}
                onClick={() =>
                  this.props.handleEdit(this.props.data.indexOf(record), record)
                }
              />
            </Tooltip>
          </Col>
          <Col span={10}>
            <Tooltip placement="topRight" title="Delete">
              <DeleteFilled
                style={{ color: "red", fontSize: "20px" }}
                danger="true"
                onClick={() =>
                  this.props.handleDelete(this.props.data.indexOf(record))
                }
              />
            </Tooltip>
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
      <div>
        <div className="action-button-user">
          <Tooltip placement="topRight" title="Add user">
            <UserAddOutlined onClick={() => this.handleAddUser()} />
          </Tooltip>
          &nbsp; &nbsp;
          <Tooltip placement="topRight" title="Export as Pdf">
            <FilePdfOutlined
              onClick={() =>
                exportToPdf(_.keys(_.head(this.props.data)), this.props.data)
              }
            />
          </Tooltip>
          &nbsp; &nbsp;
          <Tooltip placement="topRight" title="Export as Excel">
            <FileExcelOutlined
              onClick={() =>
                exportToExcel(_.keys(_.head(this.props.data)), this.props.data)
              }
            />
          </Tooltip>
        </div>
        <Table
          columns={this.columns}
          scroll={{ x: 200 }}
          dataSource={[...this.props.data]}
          pagination={{ pageSize: 8 }}
          rowKey={(record) => record.mobile}
        />

        <UserAddModal
          isAddUserModalVisible={this.props.isAddUserModalVisible}
          atnAddUser={this.props.atnAddUser}
          atnUserModalToggle={this.props.atnUserModalToggle}
        />
      </div>
    );
  }
}

export default withRouter(UserTable);
