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
      return { ...state, users: [...state.users, action.user] };
    case DELETE_USER:
      return { ...state, users: action.users };
    case UPDATE_USER:
      return { ...state, users: action.users };
    case LOGIN_SUCCESS:
      return { ...state, isLoginSuccess: true };
    default:
      return state;
  }
};

export default AppReducer;
