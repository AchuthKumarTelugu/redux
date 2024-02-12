import { useStore } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import {reducers} from './reducers/index';
import { thunk } from "redux-thunk";
export const store2=createStore(reducers,{},applyMiddleware(thunk))//reducers , intialState ,middle ware
