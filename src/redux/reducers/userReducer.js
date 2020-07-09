/**
 * Reducer for Add,Edit and Delete the user
 */
import {
  REGISTER_USER,
  DELETE_USER,
  UPDATE_USER,
  LOGIN_SUCCESS,
} from "../actionTypes/userActionTypes";
import { EDIT_PROFILE } from "../actionTypes/profileActionTypes";
import tempData from "../../assets/data/tempData.json";
import profileData from "../../assets/data/profile.json";

const initialState = {
  users: tempData,
  isLoginSuccess: false,
  profile: profileData,
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
    case EDIT_PROFILE:
      return { ...state, profile: action.data };
    default:
      return state;
  }
};

export default AppReducer;
