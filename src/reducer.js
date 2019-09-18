import { combineReducers } from "redux";
import todoReducer from "./reducer/index";

const todoApp = combineReducers({
  todos: todoReducer
});
export default todoApp;
