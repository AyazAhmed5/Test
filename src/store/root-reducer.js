import { combineReducers } from "redux";
import { counterReducer } from "../store/counter/counter-reducer";

export const rootReducer = () => {
  combineReducers({
    counter: counterReducer,
  });
};
