/**
 * Reducer for the store
 */
import userActionTypes from "../actionTypes/userActionTypes";
import loginActionTypes from "../actionTypes/loginActionTypes";
import profileActionTypes from "../actionTypes/profileActionTypes";
import tempData from "../../assets/data/tempData.json";
import profileData from "../../assets/data/profile.json";

/**
 * initial state for the reducer
 */
const initialState = {
  users: [],
  isAddUserModalVisible: false,
  isLoginSuccess: false,
  profile: {},
  imageList: [],
  menuSelelectedKey: "",
};

/**
 * @function AppReducer updates the previous states with new states
 * @param {object} state - initial state for the app reducer
 * @param {object} action - dispatched action which contains type and payload data
 */
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: true,
        users: tempData,
        profile: profileData,
        menuSelelectedKey: "1",
      };
    case userActionTypes.USER_ADD:
      return { ...state, users: [...state.users, action.user] };
    case userActionTypes.USER_DELETE:
      return { ...state, users: action.users };
    case userActionTypes.USER_EDIT:
      return { ...state, users: action.users };
    case userActionTypes.USER_ADD_MODAL_TOGGLE:
      return { ...state, isAddUserModalVisible: !state.isAddUserModalVisible };
    case profileActionTypes.PROFILE_EDIT:
      return { ...state, profile: action.data };
    case profileActionTypes.PROFILE_IMAGE_UPLOAD:
      return { ...state, imageList: action.image };
    case userActionTypes.MENU_SELECT_KEY:
      return { ...state, menuSelelectedKey: action.value };
    case loginActionTypes.LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default AppReducer;
