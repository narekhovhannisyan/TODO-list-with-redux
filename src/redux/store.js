import { createStore, applyMiddleware } from "redux";
import toDoReducer from "../reducers/todo";

export const store = createStore(
  toDoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__()
);
