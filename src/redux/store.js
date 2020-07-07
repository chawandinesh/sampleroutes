import { createStore } from "redux";
import reducer from "./reducers/appReducer";

export const store = createStore(reducer);
