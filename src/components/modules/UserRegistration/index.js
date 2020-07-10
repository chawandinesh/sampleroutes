/**
 * Container for the User Registration Component
 */
import { connect } from "react-redux";
import UserRegistration from "./UserRegistration";
import userActions from "../../../redux/actions/userActions";

/**
 * mapStateToProps to send store to the component
 * @param  state
 */
const mapStateToProps = (state) => {
  return {
    state,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the UserRegistration component
 * @function @name mapDispatchToProps
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    atnAddUser: (e) => dispatch(userActions.atnAddUser(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);
