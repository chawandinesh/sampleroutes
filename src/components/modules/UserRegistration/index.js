/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import UserRegistration from "./UserRegistration";
import { AtnAddUser } from "../../../redux/actions/userActions";

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
 * mapDispatchToProps responsible to send actions to the components
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    AtnAddUser: (e) => dispatch(AtnAddUser(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);
