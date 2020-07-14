/**
 * Actions for Add,Edit and Delete the user
 */

import userActionTypes from "../actionTypes/userActionTypes";
import { store } from "../store";

/**
 * Adds new user entity into  available users list
 * @function @name atnAddUser
 * @param {object} user
 */
const atnAddUser = (user) => {
  return {
    type: userActionTypes.USER_ADD,
    user,
  };
};

/**
 * to toggle modal visible
 * @function @name atnUserModalToggle
 */
const atnUserModalToggle = () => {
  return {
    type: userActionTypes.USER_ADD_MODAL_TOGGLE,
  };
};

/**
 * Deletes the specific user
 * @function @name atnDeleteUser
 * @param {number} index - index value of the specific user
 */
const atnDeleteUser = (index) => {
  const { users } = store.getState();
  users.splice(index, 1);
  return {
    type: userActionTypes.USER_DELETE,
    users,
  };
};

/**
 * Updates the user
 * @function @name atnEditUser
 * @param {number} index - index value of the updating user
 * @param {object} value - updated data of specific user
 */
const atnEditUser = (index, value) => {
  const { users } = store.getState();
  users.splice(index, 1, value);
  return {
    type: userActionTypes.USER_EDIT,
    users,
  };
};

/**
 * Updates the user
 * @function @name atnMenuSelectedKey
 * @param {string} index - key for menu pannel
 */
const atnMenuSelectedKey = (value) => {
  return {
    type: userActionTypes.MENU_SELECT_KEY,
    value,
  };
};

export default {
  atnAddUser,
  atnDeleteUser,
  atnEditUser,
  atnUserModalToggle,
  atnMenuSelectedKey,
};
