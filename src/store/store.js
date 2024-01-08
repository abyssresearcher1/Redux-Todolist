import { combineReducers, createStore } from "redux";
import Todolistreducer from "./Todolistreducer";

const rootReducer = combineReducers({
  todoReducer: Todolistreducer,
});

const store = createStore(rootReducer);

export default store;
