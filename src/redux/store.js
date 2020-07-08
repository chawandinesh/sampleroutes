/**
 * State container for the app
 */
import { createStore } from "redux";
import reducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducer, composeWithDevTools());
