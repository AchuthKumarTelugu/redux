import { combineReducers } from "redux";
import { CashReducer } from "./cashReducer";

export const reducers=combineReducers({
    cash:CashReducer
})