/**
 * Actions for login and logout
 */
import loginActionTypes from "../actionTypes/loginActionTypes";

/**
 * @function @name atnLogin
 */
const atnLogin = () => {
  return {
    type: loginActionTypes.LOGIN_SUCCESS,
  };
};

/**
 * @function @name atnLogout
 */
const atnLogout = () => {
  return {
    type: loginActionTypes.LOGOUT_SUCCESS,
  };
};

export default { atnLogin, atnLogout };
