import { combineReducers } from "redux";
import { animalsReducer } from "./animalsReducer";
import { donationsReducer } from "./donationsReducer";
import isLoadingReducer from "./isLoadingReducer";
import hasErroredReducer from "./hasErroredReducer";

export const rootReducer = combineReducers({
  animals: animalsReducer,
  donations: donationsReducer,
  loading: isLoadingReducer,
  error: hasErroredReducer
});
