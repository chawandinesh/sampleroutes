/**
 * Reducer for Add,Edit and Delete the user
 */
import {
  REGISTER_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../actionTypes/userActionTypes";

const initialState = [
  {
    name: "Dinesh",
    mobile: "8466088698",
    email: "chavan.dinesh@ahex.co.in",
    address: "Hyderabad",
  },
];

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return [...state, action.user];
    case DELETE_USER:
      return [...action.value];
    case UPDATE_USER:
      return [...action.value];
    default:
      return state;
  }
};

export default AppReducer;
