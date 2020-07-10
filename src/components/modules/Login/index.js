/**
 * Container for the Login Component
 */
import { connect } from "react-redux";
import Login from "./Login";
import loginAction from "../../../redux/actions/loginActions";

/**
 * mapStateToProps to send store to the Login component
 * @function @name mapStateToProps
 * @param  {object} state
 */
const mapStateToProps = (state) => {
  return {
    state,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the Login component
 * @function @name mapDispatchToProps
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    atnLogin: () => dispatch(loginAction.atnLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
