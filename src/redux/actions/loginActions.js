/**
 * Actions for login and logout
 */
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes/loginActionTypes";

/**
 * @function @name atnLogin
 */
const atnLogin = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

/**
 * @function @name atnLogout
 */
const atnLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export default { atnLogin, atnLogout };
