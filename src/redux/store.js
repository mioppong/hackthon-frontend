import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducer";

const reducers = combineReducers({
  homeStore: reducer.reducer,
});

export default reducers;

const store = createStore(reducers, applyMiddleware(thunk, createLogger()));

export { store };
