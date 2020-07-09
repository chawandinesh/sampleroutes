/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
// import {
//   AtnAddUser,
//   AtnDeleteUser,
//   AtnEditUser,
//   AtnLogin,
// } from "../redux/actions/userActions";

/**
 * mapStateToProps to send store to the component
 * @param  state
 */
const mapStateToProps = (state) => {
  console.log("state", state);
  const { isLoginSuccess, users } = state;
  return {
    users,
    isLoginSuccess,
  };
};

export default connect(mapStateToProps)(Dashboard);
