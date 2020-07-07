/**
 * Reducer for Add,Edit and Delete the user
 */
import {
  REGISTER_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../actionTypes/userActionTypes";

const initialState = [];

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return [...state, action.payload];
    case DELETE_USER:
      state.splice(action.index, 1);
      return [...state];
    case UPDATE_USER:
      state.splice(action.index, 1, action.value);
      return [...state];
    default:
      return state;
  }
};

export default AppReducer;
