import thunk from "redux-thunk";
import {reducer} from "./reducers/apiReducer";
import {createStore, applyMiddleware} from "redux";

export const store = createStore(reducer, applyMiddleware(thunk))


