/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import Main from "./Main";
import {
  AtnAddUser,
  AtnDeleteUser,
  AtnEditUser,
} from "../redux/actions/userActions";

/**
 * mapStateToProps to send store to the component
 * @param  store
 */
const mapStateToProps = (store) => {
  return {
    state: store,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the components
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    AtnAddUser: (e) => dispatch(AtnAddUser(e)),
    AtnDeleteUser: (idx) => dispatch(AtnDeleteUser(idx)),
    AtnEditUser: (idx, value) => dispatch(AtnEditUser(idx, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
