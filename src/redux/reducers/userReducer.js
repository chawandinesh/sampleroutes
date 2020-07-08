/**
 * Reducer for Add,Edit and Delete the user
 */
import {
  REGISTER_USER,
  DELETE_USER,
  UPDATE_USER,
  LOGIN_SUCCESS,
} from "../actionTypes/userActionTypes";
import tempData from "../../utils/tempData.json";

const initialState = {
  users: tempData,
  isLoginSuccess: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      state.users.push(action.user);
      return state;
    case DELETE_USER:
      state.users.splice(action.index, 1);
      return state;
    case UPDATE_USER:
      state.users.splice(action.index, 1, action.value);
      return state;
    case LOGIN_SUCCESS:
      return { ...state, isLoginSuccess: true };
    default:
      return state;
  }
};

export default AppReducer;
