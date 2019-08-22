import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import todo from "./todo";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  alert,
  auth,
  todo,
  visibilityFilter
});
