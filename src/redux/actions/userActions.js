/**
 * Actions for Add,Edit and Delete the user
 */
import {
  USER_ADD,
  USER_DELETE,
  USER_EDIT,
  USER_ADD_MODAL_TOGGLE,
} from "../actionTypes/userActionTypes";
import { store } from "../store";

/**
 * Adds new user entity into  available users list
 * @function @name atnAddUser
 * @param {object} user
 */
const atnAddUser = (user) => {
  return {
    type: USER_ADD,
    user,
  };
};

/**
 * to toggle modal visible
 * @function @name atnUserModalToggle
 */
const atnUserModalToggle = () => {
  return {
    type: USER_ADD_MODAL_TOGGLE,
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
    type: USER_DELETE,
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
    type: USER_EDIT,
    users,
  };
};

export default { atnAddUser, atnDeleteUser, atnEditUser, atnUserModalToggle };
