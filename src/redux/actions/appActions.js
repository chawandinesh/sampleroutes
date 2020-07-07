/**
 * Actions for Add,Edit and Delete the user
 */
import {
  REGISTER_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../actionTypes/actionTypes";

export const AtnAdd = (e) => {
  return {
    type: REGISTER_USER,
    payload: e,
  };
};

export const AtnDelete = (index) => {
  return {
    type: DELETE_USER,
    index,
  };
};

export const AtnEdit = (index, value) => {
  return {
    type: UPDATE_USER,
    index,
    value,
  };
};

export default { AtnAdd, AtnDelete, AtnEdit };
