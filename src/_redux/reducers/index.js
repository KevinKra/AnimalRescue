import { combineReducers } from "redux";
import { animalsReducer } from "./animalsReducer";

export const rootReducer = combineReducers({
  animals: animalsReducer
});
