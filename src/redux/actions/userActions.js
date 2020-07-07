/**
 * Actions for Add,Edit and Delete the user
 */
import {
  REGISTER_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../actionTypes/userActionTypes";

export const AtnAddUser = (e) => {
  return {
    type: REGISTER_USER,
    payload: e,
  };
};

export const AtnDeleteUser = (index) => {
  return {
    type: DELETE_USER,
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

export default { AtnAddUser, AtnDeleteUser, AtnEditUser };
