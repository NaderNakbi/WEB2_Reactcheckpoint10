import {combineReducers,createStore  } from "redux";
import todoReducer from "../reducers/todoReducer";
//import listReducer from "./reducers/listReducer";
//const rootReducer = combineReducers({list:listReducer})
//const rootReducer = combi
export default createStore(todoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());