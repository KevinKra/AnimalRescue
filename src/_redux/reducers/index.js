import { combineReducers } from "redux";
import { animalsReducer } from "./animalsReducer";
import { donationsReducer } from "./donationsReducer";

export const rootReducer = combineReducers({
  animals: animalsReducer,
  donations: donationsReducer
});
