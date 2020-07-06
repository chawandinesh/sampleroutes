/**
 * UserList page
 */
import React from "react";
import { Col, Row, Button } from "antd";

// UserList component
class UserList extends React.Component {
  render() {
    return (
      <div style={{ background: "#999", color: "white" }}>
        {this.props.formData.map((eachData, idx) => (
          <Row justify="center" key={idx}>
            <Col span={4}>{eachData.name}</Col>
            <Col span={4}>{eachData.mobile}</Col>
            <Col span={4}>{eachData.email}</Col>
            <Col span={4}>{eachData.address}</Col>
            <Col span={4}>
              <Button
                type="primary"
                onClick={(e) => this.props.handleEdit(idx)}
              >
                Edit
              </Button>
            </Col>
            <Col span={4}>
              <Button danger onClick={(e) => this.props.handleDelete(idx)}>
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}
export default UserList;
