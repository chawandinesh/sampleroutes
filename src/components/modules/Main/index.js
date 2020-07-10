/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import loginActions from "../../../redux/actions/loginActions";
import Main from "./Main";

/**
 * mapStateToProps to send store to the Main component
 * @function @name mapStateToProps
 * @param  {object} state
 */
const mapStateToProps = (state) => {
  const { isLoginSuccess } = state;
  return {
    isLoginSuccess,
  };
};

/**
 * mapDispatchToProps responsible to send actions to the Main component
 * @function @name mapDispatchToProps
 * @param {function} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    atnLogout: () => dispatch(loginActions.atnLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
