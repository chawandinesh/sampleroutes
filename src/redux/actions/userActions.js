/**
 * Actions for Add,Edit and Delete the user
 */
import {
  REGISTER_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../actionTypes/userActionTypes";
import { store } from "../store";

const state = store.getState();
export const AtnAddUser = (user) => {
  return {
    type: REGISTER_USER,
    user,
  };
};

export const AtnDeleteUser = (index) => {
  state.splice(index, 1);
  return {
    type: DELETE_USER,
    value: state,
  };
};

export const AtnEditUser = (index, value) => {
  state.splice(index, 1, value);
  return {
    type: UPDATE_USER,
    value: state,
  };
};

export default { AtnAddUser, AtnDeleteUser, AtnEditUser };
