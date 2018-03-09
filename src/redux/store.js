import { createStore, applyMiddleware, compose } from "redux";
import toDoReducer from "../reducers/todo";
import { makaka } from "./middleware";

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

export const store = createStore(
  toDoReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
