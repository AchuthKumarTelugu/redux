import { applyMiddleware, createStore } from "redux";
 import reducers from './reducers/Index'
import { thunk } from "redux-thunk";

  const store=createStore(reducers,{},applyMiddleware(thunk))//reducer,intial state,middle ware
  export default store