import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL || ""
});

export const createReducer = reducers =>
  combineReducers({
    router: connectRouter(history),
    ...reducers
  });

export default function(initialState) {
  const routerMW = routerMiddleware(history);
  return createStore(
    createReducer(),
    initialState,
    process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(routerMW),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : compose(applyMiddleware(routerMW))
  );
}
