/**
 * Container for the Users Component
 */
import { connect } from "react-redux";
import Users from "./Users";
import userActions from "../../../redux/actions/userActions";

/**
 * mapStateToProps to send store to the Users component
 * @param  state
 */
const mapStateToProps = (state) => {
  const { users, isAddUserModalVisible } = state;
  return {
    users,
    isAddUserModalVisible,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the Users component
 * @function @name mapDispatchToProps
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    atnAddUser: (value) => dispatch(userActions.atnAddUser(value)),
    atnDeleteUser: (idx) => dispatch(userActions.atnDeleteUser(idx)),
    atnEditUser: (idx, value) => dispatch(userActions.atnEditUser(idx, value)),
    atnUserModalToggle: () => dispatch(userActions.atnUserModalToggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
