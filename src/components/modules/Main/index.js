/**
 * Container for the Main Component
 */
import { connect } from "react-redux";
import loginActions from "../../../redux/actions/loginActions";
import userActions from "../../../redux/actions/userActions";
import Main from "./Main";

/**
 * mapStateToProps to send store to the Main component
 * @function @name mapStateToProps
 * @param  {object} state
 */
const mapStateToProps = (state) => {
  const { isLoginSuccess, imageList, menuSelelectedKey } = state;
  return {
    isLoginSuccess,
    imageList,
    menuSelelectedKey,
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
    atnMenuSelectedKey: (e) => dispatch(userActions.atnMenuSelectedKey(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
