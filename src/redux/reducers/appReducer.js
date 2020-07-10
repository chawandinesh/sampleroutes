/**
 * Reducer for the store
 */
import {
  USER_ADD,
  USER_DELETE,
  USER_EDIT,
} from "../actionTypes/userActionTypes";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actionTypes/loginActionTypes";
import {
  PROFILE_EDIT,
  PROFILE_IMAGE_UPLOAD,
} from "../actionTypes/profileActionTypes";
import tempData from "../../assets/data/tempData.json";
import profileData from "../../assets/data/profile.json";

/**
 * initial state for the reducer
 */
const initialState = {
  users: [],
  isLoginSuccess: false,
  profile: {},
  imageList: [],
};

/**
 * @function AppReducer updates the previous states with new states
 * @param {object} state - initial state for the app reducer
 * @param {object} action - dispatched action which contains type and payload data
 */
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: true,
        users: tempData,
        profile: profileData,
      };
    case USER_ADD:
      return { ...state, users: [...state.users, action.user] };
    case USER_DELETE:
      return { ...state, users: action.users };
    case USER_EDIT:
      return { ...state, users: action.users };
    case PROFILE_EDIT:
      return { ...state, profile: action.data };
    case PROFILE_IMAGE_UPLOAD:
      return { ...state, imageList: action.image };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default AppReducer;
