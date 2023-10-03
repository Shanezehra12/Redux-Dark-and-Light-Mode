import { createStore, combineReducers } from "redux";
import { Reducers } from "../reducer/Reducers";
import { ThemeReducer } from "../reducer/ThemeReducer";

const totalReducer = combineReducers({Reducers, ThemeReducer});
export const mystore = createStore(totalReducer);