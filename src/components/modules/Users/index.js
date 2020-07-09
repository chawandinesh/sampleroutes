/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import UserDisplay from "./UserDisplay";
import { AtnDeleteUser, AtnEditUser } from "../../../redux/actions/userActions";

/**
 * mapStateToProps to send store to the component
 * @param  state
 */
const mapStateToProps = (state) => {
  const { users } = state;
  return {
    users,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the components
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    AtnDeleteUser: (idx) => dispatch(AtnDeleteUser(idx)),
    AtnEditUser: (idx, value) => dispatch(AtnEditUser(idx, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay);
