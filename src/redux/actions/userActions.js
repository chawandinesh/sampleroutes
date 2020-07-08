/**
 * Actions for Add,Edit and Delete the user
 */
import {
  REGISTER_USER,
  DELETE_USER,
  UPDATE_USER,
  LOGIN_SUCCESS,
} from "../actionTypes/userActionTypes";
import { store } from "../store";
const users = store.getState().users;
export const AtnAddUser = (user) => {
  return {
    type: REGISTER_USER,
    user,
  };
};

export const AtnDeleteUser = (index) => {
  return {
    type: DELETE_USER,
    users,
    index,
  };
};

export const AtnEditUser = (index, value) => {
  return {
    type: UPDATE_USER,
    index,
    value,
  };
};

export const AtnLogin = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export default { AtnAddUser, AtnDeleteUser, AtnEditUser };
